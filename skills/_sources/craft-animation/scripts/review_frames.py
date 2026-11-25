"""Extract exact zero-based video frames into a frame-labelled PNG contact sheet."""
import argparse
from io import BytesIO
from pathlib import Path
import subprocess
from PIL import Image, ImageDraw


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("film", type=Path)
    p.add_argument("sheet", type=Path)
    p.add_argument("--frames", type=int, nargs="+", required=True, help="zero-based display indices")
    p.add_argument("--width", type=int, default=320, help="thumbnail width")
    args = p.parse_args()
    indices = sorted(set(args.frames))
    if not args.film.is_file() or min(indices) < 0 or args.width < 1 or args.sheet.suffix.lower() != ".png":
        p.error("expected an existing film, nonnegative frames, positive width and a .png output")
    # Decode once. Select by presentation index even for variable-rate sources.
    select = "+".join(f"eq(n\\,{i})" for i in indices)
    cmd = ["ffmpeg", "-v", "error", "-i", str(args.film), "-map", "0:v:0",
           "-vf", f"select={select},scale={args.width}:-1:flags=lanczos", "-fps_mode", "vfr",
           "-frames:v", str(len(indices)), "-f", "image2pipe", "-c:v", "ppm", "-"]
    raw = BytesIO(subprocess.check_output(cmd))
    thumbs = []
    for index in indices:
        if raw.tell() == len(raw.getbuffer()):
            p.error(f"frame {index} lies beyond the film")
        # FFmpeg writes binary PPM with a known three-line header.
        if raw.readline().strip() != b"P6":
            raise ValueError("unexpected FFmpeg pixel format")
        width, height = map(int, raw.readline().split())
        if raw.readline().strip() != b"255":
            raise ValueError("expected 8-bit RGB")
        thumbs.append(Image.frombytes("RGB", (width, height), raw.read(width * height * 3)))
    width, height = thumbs[0].size
    cols = min(4, len(thumbs))
    sheet = Image.new("RGB", (cols*width, ((len(thumbs)+cols-1)//cols)*(height+24)), "#ecebe6")
    draw = ImageDraw.Draw(sheet)
    for j, (i, thumb) in enumerate(zip(indices, thumbs)):
        x, y = (j%cols)*width, (j//cols)*(height+24)
        sheet.paste(thumb, (x, y))
        draw.text((x+6, y+height+4), f"frame {i}", fill="#17262d")
    args.sheet.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(args.sheet)
    print(args.sheet)


if __name__ == "__main__":
    main()
