#!/usr/bin/env python3
"""Redact sensitive info from the CV before publishing it as assets/cv.pdf.

Usage:  python3 tools/redact_cv.py <private-source.pdf>

Removes: phone number, middle name + second surname, city (Toluca),
and any XMP metadata. Keeps: public email, LinkedIn/GitHub/site links and
all professional content.

True redaction (text removed from the PDF content stream) via PyMuPDF,
then the replacement text is drawn at the original baseline in Times
(the CV is set in Times New Roman), and the mailto link is re-created.
The private source PDF must never be committed.
"""

import sys
from pathlib import Path

import pymupdf as fitz

PORTFOLIO = Path(__file__).resolve().parent.parent
OUT = PORTFOLIO / "assets" / "cv.pdf"

FONT = {"regular": "tiro", "bold": "tibo"}  # built-in Times-Roman / Times-Bold


def find_span(page, needle):
    """First text span containing `needle`, with its bbox, origin and size."""
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            for span in line["spans"]:
                if needle in span["text"]:
                    return span
    raise SystemExit(f"Not found in CV: {needle!r}")


def spans_with(page, needle):
    out = []
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            for span in line["spans"]:
                if span["text"].strip() == needle:
                    out.append(span)
    return out


def main(src: Path) -> None:
    doc = fitz.open(src)
    page = doc[0]
    center = page.rect.width / 2

    name = find_span(page, "ARZALUZ")
    contact = find_span(page, "@")
    email = contact["text"].split("|")[-1].strip()
    cities = spans_with(page, "Toluca, México")

    draws = []  # (text, x, baseline_y, font, size)

    # Name: keep first name + first surname, centered.
    text = "CHRISTIAN ARZALUZ"
    w = fitz.get_text_length(text, fontname=FONT["bold"], fontsize=name["size"])
    draws.append((text, center - w / 2, name["origin"][1], FONT["bold"], name["size"]))
    page.add_redact_annot(fitz.Rect(name["bbox"]), fill=(1, 1, 1))

    # Contact line: drop city and phone, keep the email (re-linked below).
    text = f"México | {email}"
    size = contact["size"]
    w = fitz.get_text_length(text, fontname=FONT["regular"], fontsize=size)
    x0 = center - w / 2
    draws.append((text, x0, contact["origin"][1], FONT["regular"], size))
    page.add_redact_annot(fitz.Rect(contact["bbox"]), fill=(1, 1, 1))
    email_x0 = x0 + fitz.get_text_length("México | ", fontname=FONT["regular"], fontsize=size)
    email_rect = fitz.Rect(email_x0, contact["bbox"][1], x0 + w, contact["bbox"][3])

    # Right-aligned locations in the experience section.
    for span in cities:
        text = "México"
        w = fitz.get_text_length(text, fontname=FONT["bold"], fontsize=span["size"])
        draws.append((text, span["bbox"][2] - w, span["origin"][1], FONT["bold"], span["size"]))
        page.add_redact_annot(fitz.Rect(span["bbox"]), fill=(1, 1, 1))

    # Remove the old mailto/tel links on the contact line before redacting.
    for link in page.get_links():
        if link["from"].intersects(fitz.Rect(contact["bbox"])):
            page.delete_link(link)

    page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE)
    for text, x, y, font, size in draws:
        page.insert_text((x, y), text, fontname=font, fontsize=size, color=(0, 0, 0))
    page.insert_link({"kind": fitz.LINK_URI, "from": email_rect, "uri": f"mailto:{email}"})

    doc.set_metadata({"title": "Christian Arzaluz - iOS Engineer", "author": "Christian Arzaluz"})
    doc.del_xml_metadata()
    doc.save(OUT, deflate=True, garbage=4)
    doc.close()

    # Verify nothing sensitive survived.
    check = fitz.open(OUT)
    full = "".join(p.get_text() for p in check)
    for leaked in ("Toluca", "TELLEZ", "DANIEL", "722 512", "3280"):
        assert leaked not in full, f"still present: {leaked}"
    print(f"Redacted CV written to {OUT.relative_to(PORTFOLIO)}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    main(Path(sys.argv[1]))
