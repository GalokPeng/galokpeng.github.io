"""Verify a personal skill's catalog entry, published archive and online source tree."""
import argparse
from collections import Counter
from hashlib import sha256
import json
from pathlib import Path, PurePosixPath
from zipfile import ZipFile


def digest(path):
    with path.open("rb") as stream:
        result = sha256()
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            result.update(chunk)
    return result.hexdigest()


def check(root, slug, original=None):
    directory = root / "skills"
    catalog = json.loads((directory / "catalog.json").read_text(encoding="utf-8"))
    matches = [entry for entry in catalog
               if entry.get("collection", "personal") == "personal" and entry.get("guide") == slug]
    if len(matches) != 1:
        raise ValueError(f"Expected one personal card with guide={slug!r}, found {len(matches)}")
    entry = matches[0]
    for key in ("name", "nameEn", "description", "descriptionEn", "file"):
        if not isinstance(entry.get(key), str) or not entry[key].strip():
            raise ValueError(f"Missing catalog field: {key}")
    for component in (slug, entry["file"]):
        if not component or component in {".", ".."} or any(char in component for char in "/\\:"):
            raise ValueError(f"Expected a single path component: {component!r}")
    archive = directory / entry["file"]
    if archive.suffix.lower() not in {".zip", ".skill"}:
        raise ValueError(f"Unsupported download extension: {archive.name}")
    if original and digest(archive) != digest(original):
        raise ValueError("The download differs from the supplied archive")
    source = directory / "_sources" / slug
    if not (source / "SKILL.md").is_file():
        raise ValueError(f"Missing online guide: {source / 'SKILL.md'}")
    actual = {p.relative_to(source).as_posix(): p for p in source.rglob("*") if p.is_file()}
    with ZipFile(archive) as package:
        paths = []
        for item in package.infolist():
            path = PurePosixPath(item.filename)
            if path.is_absolute() or ".." in path.parts or any(c in item.filename for c in "\\:"):
                raise ValueError(f"Unexpected archive path: {item.filename}")
            if ((item.external_attr >> 16) & 0o170000) == 0o120000:
                raise ValueError(f"Unexpected archive link: {item.filename}")
            if not item.is_dir():
                paths.append(path.as_posix())
        duplicates = [name for name, count in Counter(paths).items() if count > 1]
        if duplicates:
            raise ValueError(f"Duplicate archive paths: {duplicates}")
        guide_dirs = {path.parent for path in map(PurePosixPath, paths) if path.name == "SKILL.md"}
        roots = sorted(path for path in guide_dirs if guide_dirs.isdisjoint(path.parents))
        if len(roots) != 1:
            raise ValueError(f"Expected one enclosing skill directory, found {roots}")
        prefix = "" if roots[0] == PurePosixPath(".") else roots[0].as_posix() + "/"
        expected = {name[len(prefix):] for name in paths if name.startswith(prefix)}
        if expected != actual.keys():
            raise ValueError(f"Missing in source: {sorted(expected - actual.keys())}; "
                             f"extra in source: {sorted(actual.keys() - expected)}")
        for name, file in actual.items():
            if package.read(prefix + name) != file.read_bytes():
                raise ValueError(f"Content differs: {name}")
    print(f"{entry['nameEn']}: {len(actual)} files match {archive.name}; SHA-256 {digest(archive)}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("slug", help="Value of the personal entry's guide field")
    parser.add_argument("--original", type=Path)
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args()
    check(args.root, args.slug, args.original)
