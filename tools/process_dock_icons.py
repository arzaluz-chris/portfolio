#!/usr/bin/env python3
"""Normalize dock icons: unified canvas, unified safe-area, squircle mask for iOS apps."""

from pathlib import Path
import numpy as np
from PIL import Image

SRC = Path(__file__).resolve().parent.parent / "assets" / "dock-icons"
OUT = SRC / "processed"
OUT.mkdir(parents=True, exist_ok=True)

CANVAS = 1024
SAFE = 824
SQUIRCLE_N = 5.0  # Superellipse exponent — ≈iOS/macOS icon shape
IOS_SAFE = 810    # iOS apps as solid squircles read slightly bigger optically
                  # than airier macOS icons — tiny compensation to match.
OPAQUE_THRESHOLD = 128  # Ignore soft halo/shadow when cropping macOS icons.

IOS_APPS = {
    "Alba.png":        "alba.png",
    "Lumina.png":      "lumina.png",
    "Pomo.png":        "pomo.png",
    "TeddyFeels.png":  "teddyfeels.png",
    "Vorth.png":       "vorth.png",
    "WaldenVibes.png": "waldenvibes.png",
}

MAC_ICONS = {
    "finder.png":           "finder.png",
    "contacts.png":         "contacts.png",
    "safari.webp":          "safari.png",
    "terminal.webp":        "terminal.png",
    "textedit.webp":        "textedit.png",
    "paint.png":            "paint.png",
    "calculator.png":       "calculator.png",
    "settings.png":         "settings.png",
    "mail.png":             "mail.png",
    "trash bin empty.png":  "trash-empty.png",
    "trash bin full.png":   "trash-full.png",
}

# Per-icon scale overrides. For icons with protruding elements (pen on
# TextEdit) the bbox hugs the protrusion and shrinks the main body.
# Over-scale so the body matches others; the protrusion goes into the margin.
MAC_SCALE_OVERRIDES = {
    "textedit.webp": 1.18,  # pen protrudes above notebook
}


def squircle_mask(size: int, n: float = SQUIRCLE_N, supersample: int = 4) -> Image.Image:
    """True superellipse (iOS/macOS icon shape) rendered at supersample resolution,
    then downsampled with LANCZOS for smooth antialiasing."""
    big = size * supersample
    y, x = np.indices((big, big), dtype=np.float32)
    c = (big - 1) / 2.0
    a = big / 2.0
    d = (np.abs((x - c) / a) ** n + np.abs((y - c) / a) ** n) ** (1.0 / n)
    mask_big = (d <= 1.0).astype(np.uint8) * 255
    return Image.fromarray(mask_big, "L").resize((size, size), Image.LANCZOS)


def fit_preserving_aspect(img: Image.Image, target_long_side: int) -> Image.Image:
    w, h = img.size
    scale = target_long_side / max(w, h)
    return img.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)


def paste_centered(canvas: Image.Image, img: Image.Image) -> None:
    x = (canvas.width - img.width) // 2
    y = (canvas.height - img.height) // 2
    canvas.paste(img, (x, y), img)


def opaque_bbox(img: Image.Image, threshold: int = OPAQUE_THRESHOLD):
    """Bounding box of pixels with alpha > threshold — ignores soft halos/shadows."""
    alpha = np.array(img.getchannel("A"))
    mask = alpha > threshold
    if not mask.any():
        return None
    rows = np.where(mask.any(axis=1))[0]
    cols = np.where(mask.any(axis=0))[0]
    return (int(cols[0]), int(rows[0]), int(cols[-1]) + 1, int(rows[-1]) + 1)


def process_ios(src_name: str, out_name: str) -> None:
    img = Image.open(SRC / src_name).convert("RGBA")
    img = img.resize((IOS_SAFE, IOS_SAFE), Image.LANCZOS)
    img.putalpha(squircle_mask(IOS_SAFE))
    canvas = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    paste_centered(canvas, img)
    canvas.save(OUT / out_name, "PNG", optimize=True)
    print(f"  ios    {src_name:30s} -> {out_name}  ({IOS_SAFE}x{IOS_SAFE})")


def process_mac(src_name: str, out_name: str) -> None:
    img = Image.open(SRC / src_name).convert("RGBA")
    bbox = opaque_bbox(img)
    if bbox:
        img = img.crop(bbox)
    scale_factor = MAC_SCALE_OVERRIDES.get(src_name, 1.0)
    target = round(SAFE * scale_factor)
    img = fit_preserving_aspect(img, target)
    canvas = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    paste_centered(canvas, img)
    canvas.save(OUT / out_name, "PNG", optimize=True)
    note = f"  (scaled x{scale_factor})" if scale_factor != 1.0 else ""
    print(f"  mac    {src_name:30s} -> {out_name}  ({img.width}x{img.height}){note}")


def main() -> None:
    print(f"Writing to {OUT}")
    for src, out in IOS_APPS.items():
        process_ios(src, out)
    for src, out in MAC_ICONS.items():
        process_mac(src, out)
    print(f"Done. {len(IOS_APPS) + len(MAC_ICONS)} icons written.")


if __name__ == "__main__":
    main()
