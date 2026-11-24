"""Check one homepage site card and its preview against the source files."""
import argparse
from pathlib import Path
from urllib.parse import urlsplit

from bs4 import BeautifulSoup
from PIL import Image


def check(root, href):
    page = BeautifulSoup((root / "index.html").read_text(encoding="utf-8"), "html.parser")
    cards = [card for card in page.select("#sites .sites-grid a.site-card") if card.get("href") == href]
    if len(cards) != 1:
        raise ValueError(f"Expected exactly one site card for {href}, found {len(cards)}")
    link = urlsplit(href)
    if not ((link.scheme in {"http", "https"} and link.netloc) or
            (href.startswith("/") and not href.startswith("//"))):
        raise ValueError(f"Expected a site path or an HTTP(S) destination: {href}")
    card = cards[0]
    title, summary, img = (card.select_one(s) for s in (".card-info h3", ".card-info p", ".snapshot img"))
    if not title or not title.get_text(strip=True):
        raise ValueError("Missing site name")
    if not summary or not summary.get_text(strip=True) or not summary.get("data-en", "").strip():
        raise ValueError("Missing Chinese or English summary")
    if not img or not img.get("src", "").startswith("/home/previews/"):
        raise ValueError("Missing local preview")
    preview = (root / img["src"].lstrip("/")).resolve()
    if not preview.is_relative_to((root / "home/previews").resolve()):
        raise ValueError(f"Unexpected preview location: {preview}")
    with Image.open(preview) as image:
        declared = tuple(int(img[attr]) for attr in ("width", "height"))
        if image.format != "WEBP" or image.size != declared:
            raise ValueError(f"{preview.name}: expected WebP {declared}, found {image.format} {image.size}")
        image.verify()
    print(f"{title.get_text(strip=True)} -> {href} ({preview.name})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("href", help="Exact href of the card in index.html")
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args()
    check(args.root, args.href)
