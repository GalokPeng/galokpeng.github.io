"""Generate an independent, self-contained project from the supplied file bytes."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import secrets
import shutil
import tempfile


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("files", nargs="+", type=Path)
    parser.add_argument("--out", required=True, type=Path)
    parser.add_argument("--title", default="文件领取")
    parser.add_argument("--admin-path", default="/manage")
    parser.add_argument("--default-limit", type=int, default=1)
    args = parser.parse_args()
    dest = args.out.resolve()
    if dest.exists():
        parser.error("--out must be a new directory")
    if not 1 <= args.default_limit <= 999:
        parser.error("--default-limit must be 1–999")
    if not re.fullmatch(r"/[a-z][a-z0-9-]{0,60}", args.admin_path) or args.admin_path in {"/claim", "/r", "/d"}:
        parser.error("Choose a separate lowercase admin path, e.g. /manage")
    inputs = [p.resolve(strict=True) for p in args.files]
    if any(not p.is_file() or p.stat().st_size == 0 for p in inputs):
        parser.error("Supply nonempty regular files")
    if len({p.name.casefold() for p in inputs}) != len(inputs):
        parser.error("Each file needs a distinct download filename")
    if any(re.search(r'[\x00-\x1f\x7f/\\]', p.name) for p in inputs):
        parser.error("Unsupported control character or separator in a filename")
    dest.parent.mkdir(exist_ok=True, parents=True)
    with tempfile.TemporaryDirectory(dir=dest.parent) as stage:
        project = Path(stage) / "project"
        template = Path(__file__).resolve().parents[1] / "assets" / "portal"
        shutil.copytree(template, project)
        assets = project / "files"
        assets.mkdir()
        manifest = {}
        for index, path in enumerate(inputs, 1):
            file = assets / path.name
            shutil.copyfile(path, file)
            with file.open("rb") as stream:
                digest = hashlib.file_digest(stream, "sha256").hexdigest()
            manifest[f"f{index}"] = {"name": path.name, "size": file.stat().st_size, "sha": digest}
        site = {"title": args.title, "adminPath": args.admin_path, "defaultLimit": args.default_limit}
        (project / "src" / "manifest.json").write_text(
            json.dumps({"site": site, "files": manifest}, ensure_ascii=False, indent=2), encoding="utf8")
        config = {"name": "claims-" + secrets.token_hex(6), "compatibility_date": "2026-01-01",
                  "main": "src/worker.mjs", "workers_dev": False, "preview_urls": False,
                  "d1_databases": [{"binding": "DB", "database_name": "claims-local",
                                    "database_id": "00000000-0000-4000-8000-000000000001"}],
                  "kv_namespaces": [{"binding": "FILES", "id": "0"*31 + "1"}]}
        (project / "wrangler.json").write_text(json.dumps(config, indent=2), encoding="utf8")
        os.rename(project, dest)
    print("Created", dest, "with", len(inputs), "file(s). Run npm ci in that directory.")


if __name__ == "__main__":
    main()
