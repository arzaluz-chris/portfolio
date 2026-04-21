#!/usr/bin/env python3
"""Redact sensitive info from cv.pdf for public portfolio hosting.

Removes: phone number, full legal middle name + surname, city, ATS tracking ID.
Keeps: public email, GitHub/LinkedIn URLs, professional content.

True redaction (text removed from the PDF content stream) via PyMuPDF,
followed by controlled re-insertion of replacement text with the original
font size / alignment preserved.
"""

from pathlib import Path
import fitz

PORTFOLIO = Path(__file__).resolve().parent.parent
SRC = PORTFOLIO / "assets" / "cv.pdf"
OUT = PORTFOLIO / "assets" / "cv-redacted.pdf"

# (search_text, replacement_text, fontname, fontsize, align)
# align: 0=left, 1=center, 2=right. replacement=None → delete only, no re-insert.
# fontnames: 'helv' Helvetica, 'hebo' Helvetica-Bold (built-in PDF standard fonts,
# visually very close to the original Arial/ArialMT used in the CV).
REDACTIONS = [
    ("CHRISTIAN DANIEL ARZALUZ TELLEZ", "CHRISTIAN ARZALUZ", "hebo", 22, 1),
    ("Toluca Mexico | 7225123280 | ",  "",                   None,   0, 0),
    ("Toluca México",                   "México",            "hebo", 11, 2),
    ("Toluca, Mex",                     "Mexico",            "helv", 11, 2),
    ("#HRJ#222e50dc-9f8f-40ed-89d8-7b17363d63d9#", "",       None,   0, 0),
]


def main() -> None:
    doc = fitz.open(SRC)
    for page in doc:
        # Plan: collect (rect, repl, font, size, align) tuples, apply redactions
        # to strip the original text, then draw replacements.
        replacements = []
        for needle, repl, font, size, align in REDACTIONS:
            for rect in page.search_for(needle):
                page.add_redact_annot(rect, fill=(1, 1, 1))
                if repl:
                    replacements.append((rect, repl, font, size, align))
        page.apply_redactions()
        for rect, repl, font, size, align in replacements:
            # insert_text (point-based) avoids insert_textbox's fit-check,
            # which silently drops text when the rect's line-height is tight.
            text_w = fitz.get_text_length(repl, fontname=font, fontsize=size)
            if align == 1:   # center
                x = rect.x0 + (rect.width - text_w) / 2
            elif align == 2: # right
                x = rect.x1 - text_w
            else:            # left
                x = rect.x0
            baseline_y = rect.y1 - 2  # rect.y1 is ~line bottom incl descender
            page.insert_text((x, baseline_y), repl,
                             fontname=font, fontsize=size,
                             color=(0, 0, 0))
    doc.save(OUT, deflate=True, garbage=4)
    doc.close()
    print(f"Redacted CV written to {OUT}")


if __name__ == "__main__":
    main()
