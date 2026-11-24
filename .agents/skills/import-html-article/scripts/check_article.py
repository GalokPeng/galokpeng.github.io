"""Compare article content in two UTF-8 HTML files or rendered DOM snapshots."""
import argparse
from collections import Counter
from pathlib import Path
import re
import sys
import unicodedata

from bs4 import BeautifulSoup, Comment, NavigableString, Tag


def compact(value):
    return re.sub(r"\s+", "", unicodedata.normalize("NFC", value))


def select(path, selector):
    soup = BeautifulSoup(path.read_text(encoding="utf-8-sig"), "html.parser")
    root = soup.select_one(selector)
    if root is None:
        raise ValueError(f"{path}: no match for {selector!r}")
    for node in root.select("script, style, template"):
        node.decompose()
    return root


def fragments(element):
    # A source may insert a value between two pieces of prose at runtime.
    parts = [""]
    for node in element.descendants:
        if isinstance(node, Tag) and node.has_attr("id") and not node.contents:
            parts.append("")
        elif isinstance(node, NavigableString) and not isinstance(node, Comment):
            parts[-1] += str(node)
    return [part for value in parts if (part := compact(value))]


def rows(root):
    return Counter(tuple(compact(cell.get_text()) for cell in row.find_all(["td", "th"], recursive=False))
                   for row in root.select("tr"))


def verbatim(root):
    return Counter(pre.get_text().replace("\r\n", "\n").strip("\n") for pre in root.select("pre"))


def citations(root):
    return Counter(a["href"] for a in root.select("a[href]") if a["href"].startswith(("https://", "http://")))


def math_indices(root):
    return Counter((node.name, compact(node.get_text())) for node in root.select("sub,sup"))


def alternatives(root):
    return Counter(compact(img["alt"]) for img in root.select("img[alt]") if img["alt"].strip())


def audit(source, target):
    # Avoid double-counting a paragraph inside a list item, or a list inside a blockquote.
    tags = "h1 h2 h3 h4 h5 h6 p li dt dd summary figcaption caption blockquote legend".split()
    corpus = compact(target.get_text())
    expected = Counter()
    for node in source.find_all(tags):
        if not any(parent.name in tags for parent in node.parents if parent is not source):
            expected.update(fragments(node))
    for node in source.find_all(string=True):
        if isinstance(node, Comment) or node.find_parent(tags + ["pre", "table", "svg", "math"]):
            continue
        value = compact(str(node))
        if value:
            expected[value] += 1
    issues = []
    for value, count in expected.items():
        if corpus.count(value) < count:
            issues.append(("text", value))
    for label, extract in [("table row", rows), ("code", verbatim), ("reference", citations),
                           ("formula index", math_indices), ("image description", alternatives)]:
        for value, count in (extract(source) - extract(target)).items():
            issues.append((label, f"{value} (missing {count})"))
    return issues


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("target", type=Path)
    parser.add_argument("--source-selector", default="body")
    parser.add_argument("--target-selector", default="body")
    args = parser.parse_args()
    source = select(args.source, args.source_selector)
    target = select(args.target, args.target_selector)
    for label, selector in [("headings", "h1,h2,h3,h4,h5,h6"), ("tables", "table"),
                            ("media", "img,svg,math,canvas,video,audio"),
                            ("controls", "button,select,input,details,[role=tab]")]:
        print(f"{label}: {len(source.select(selector))} source / {len(target.select(selector))} target")
    issues = audit(source, target)
    for label, value in issues:
        print(f"Missing {label}: {value}")
    print(f"{len(issues)} textual, tabular, code or reference differences requiring review.")
    return int(bool(issues))


if __name__ == "__main__":
    sys.exit(main())
