"""Stream a Python/Pillow or GLSL scene to an H.264 film at a fixed frame rate."""
import argparse
import importlib.util
import math
import os
from pathlib import Path
import shutil
import subprocess
import sys
from tempfile import TemporaryDirectory


def size_arg(text):
    try:
        width, height = map(int, text.lower().split("x"))
        if min(width, height) > 0 and width % 2 == height % 2 == 0:
            return width, height
    except ValueError:
        pass
    raise argparse.ArgumentTypeError("expected even, positive dimensions such as 960x540")


def python_frames(scene, size, times):
    from PIL import Image

    sys.path.insert(0, str(scene.parent))
    spec = importlib.util.spec_from_file_location("animation_scene", scene)
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    for t in times:
        img = module.frame(t, *size)
        if not isinstance(img, Image.Image) or img.size != size or img.mode != "RGB":
            raise ValueError(f"frame at {t:g}s must return an RGB Pillow image of size {size}")
        yield img.tobytes()


def shader_frames(scene, size, times):
    import moderngl

    try:
        ctx = moderngl.create_standalone_context(require=330)
    except Exception:
        if not sys.platform.startswith("linux"):
            raise
        ctx = moderngl.create_standalone_context(require=330, backend="egl")
    vertex = """#version 330
    void main() {
        vec2 point = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
        gl_Position = vec4(point * 2.0 - 1.0, 0.0, 1.0);
    }"""
    try:
        program = ctx.program(vertex_shader=vertex, fragment_shader=scene.read_text(encoding="utf-8-sig"))
        surface = ctx.simple_framebuffer(size, components=3)
        surface.use()
        quad = ctx.vertex_array(program, [])
        if "resolution" in program:
            program["resolution"].value = size
        for i, t in enumerate(times):
            if "time" in program:
                program["time"].value = t
            if "frame_index" in program:
                program["frame_index"].value = i
            surface.clear()
            quad.render(vertices=3)
            yield surface.read(components=3, alignment=1)
    finally:
        ctx.release()


def render(args):
    scene, output = args.scene.resolve(), args.output.resolve()
    if not scene.is_file() or scene.suffix not in {".py", ".frag"}:
        raise ValueError("expected an existing .py or .frag scene")
    if output.suffix.lower() != ".mp4":
        raise ValueError("choose an .mp4 destination for the H.264 master")
    if args.audio and (not args.audio.is_file() or args.audio.resolve() == output):
        raise ValueError("audio must exist and be separate from the output")
    if not (math.isfinite(args.seconds) and args.seconds > 0 and args.fps > 0):
        raise ValueError("duration and frame rate must be positive")
    if not 0 <= args.crf <= 51:
        raise ValueError("CRF must be between 0 and 51")
    if not shutil.which("ffmpeg"):
        raise ValueError("ffmpeg with the libx264 encoder is required on PATH")

    width, height = args.size
    count = max(1, math.floor(args.seconds * args.fps + .5))
    times = (i / args.fps for i in range(count))
    gl = scene.suffix == ".frag"
    frames = (shader_frames if gl else python_frames)(scene, args.size, times)
    ff = ["ffmpeg", "-nostdin", "-hide_banner", "-loglevel", "error", "-f", "rawvideo",
          "-pixel_format", "rgb24", "-video_size", f"{width}x{height}", "-framerate", str(args.fps),
          "-i", "pipe:0"]
    if args.audio:
        ff += ["-i", str(args.audio), "-map", "0:v:0", "-map", "1:a:0", "-af", "apad",
               "-c:a", "aac", "-b:a", "192k", "-t", f"{count / args.fps:.9f}"]
    else:
        ff += ["-an"]
    filters = ("vflip," if gl else "") + "scale=out_color_matrix=bt709"
    ff += ["-vf", filters, "-c:v", "libx264", "-crf", str(args.crf), "-pix_fmt", "yuv420p",
           "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
           "-movflags", "+faststart"]
    output.parent.mkdir(parents=True, exist_ok=True)
    with TemporaryDirectory(dir=output.parent) as tmp:
        candidate = Path(tmp) / "film.mp4"
        process = subprocess.Popen([*ff, str(candidate)], stdin=subprocess.PIPE)
        try:
            for pixels in frames:
                process.stdin.write(pixels)
            process.stdin.close()
            if process.wait():
                raise RuntimeError("FFmpeg encoding failed")
        finally:
            if process.poll() is None:
                process.kill()
            process.wait()
            frames.close()
        os.replace(candidate, output)
    print(f"{output} | {width}x{height} | {count} frames at {args.fps} fps")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("scene", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--size", type=size_arg, default=(960, 540), metavar="WIDTHxHEIGHT")
    parser.add_argument("--seconds", type=float, required=True)
    parser.add_argument("--fps", type=int, default=30)
    parser.add_argument("--crf", type=int, default=17)
    parser.add_argument("--audio", type=Path)
    try:
        render(parser.parse_args())
    except (ValueError, OSError, ImportError, RuntimeError) as exc:
        parser.exit(1, f"render_scene: {exc}\n")
