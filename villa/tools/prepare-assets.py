"""Prepare the verified Poly Haven downloads for the villa. Requires Pillow and npm ci."""
from pathlib import Path
import json
import shutil
import subprocess

from PIL import Image

villa = Path(__file__).resolve().parents[1]
source = villa / ".qa/source-assets"
public = villa / "public/assets"
ratios = {"potted_plant_02": 0.18, "dining_chair_02": 0.24,
          "ceramic_vase_01": 0.25, "rock_09": 0.30}

if not (source / "coastal-sky.hdr").exists():
    raise SystemExit("Download the source assets with tools/assets.ps1 first.")

for file in source.rglob("*"):
    if not file.is_file():
        continue
    dest = public / file.relative_to(source)
    dest.parent.mkdir(parents=True, exist_ok=True)
    if file.suffix == ".gltf" and file.parent.name in ratios:
        # Keep the verified texture URIs and the existing binary filename.
        model = file.parent.name
        output = dest.with_name(model + ".gltf")
        subprocess.run(["node", villa / "node_modules/gltfpack/cli.js", "-i", file,
                        "-o", output, "-tr", "-kn", "-si", str(ratios[model]),
                        "-se", "0.009", "-sp"], check=True)
        output.replace(dest)
    elif file.suffix == ".bin" and file.parent.name in ratios:
        continue
    elif file.suffix == ".jpg":
        color = file.stem == "color" or "_diff" in file.stem
        with Image.open(file) as image:
            if file.parent != source:
                size = 1024 if color else 768
                image.thumbnail((size, size), Image.Resampling.LANCZOS)
            image.save(dest.with_suffix(".webp"), quality=85 if color else 88, method=6)
    else:
        shutil.copyfile(file, dest)
    if file.suffix == ".gltf":
        gltf = json.loads(dest.read_text(encoding="utf-8"))
        for texture in gltf.get("images", []):
            if texture.get("uri", "").endswith(".jpg"):
                texture["uri"] = texture["uri"][:-4] + ".webp"
                if "mimeType" in texture:
                    texture["mimeType"] = "image/webp"
        dest.write_text(json.dumps(gltf, separators=(",", ":")), encoding="utf-8")
