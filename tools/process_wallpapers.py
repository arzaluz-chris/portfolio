#!/usr/bin/env python3
"""Process macOS source wallpapers into web-ready WebP variants.

Source files live in ~/Downloads/wallpapers (user-downloaded).
For each, produce:
  - full: max 2560 px wide, WebP q82 (retina-ready, ~300–800KB)
  - thumb: 320x180, WebP q85 (~15KB)

Canonical ids + light/dark pairing handled in WALLPAPERS below.
"""

from pathlib import Path
from PIL import Image

HOME = Path.home()
SRC = HOME / "Downloads" / "wallpapers"
PORTFOLIO = Path(__file__).resolve().parent.parent
OUT_FULL = PORTFOLIO / "assets" / "wallpapers" / "full"
OUT_THUMB = PORTFOLIO / "assets" / "wallpapers" / "thumbs"

FULL_MAX_WIDTH = 2560
THUMB_SIZE = (320, 180)
FULL_QUALITY = 82
THUMB_QUALITY = 85

# (id, source_filename, variant) — variant is 'light', 'dark', or None (single)
WALLPAPERS = [
    ("tahoe",        "26-Tahoe-Light-6K.png",    "light"),
    ("tahoe",        "26-Tahoe-Dark-6K.png",     "dark"),
    ("sequoia",      "15-Sequoia-Light-6K.jpg",  "light"),
    ("sequoia",      "15-Sequoia-Dark-6K.jpg",   "dark"),
    ("sonoma",       "14-Sonoma-Light.jpg",      "light"),
    ("monterey",     "12-Light.jpg",             "light"),
    ("monterey",     "12-Dark.jpg",              "dark"),
    ("lion",         "lion   - light.png",       "light"),
    ("mountain",     "mountain - dark.jpg",      "dark"),
    ("snow-leopard", "snow leopard light.png",   "light"),
    ("snow-leopard", "snow leopard dark.jpg",    "dark"),
    ("tiger",        "tiger.png",                None),
]


def output_name(wid: str, variant: str | None, ext: str) -> str:
    return f"{wid}-{variant}.{ext}" if variant else f"{wid}.{ext}"


def resize_max_width(img: Image.Image, max_w: int) -> Image.Image:
    if img.width <= max_w:
        return img
    ratio = max_w / img.width
    return img.resize((max_w, round(img.height * ratio)), Image.LANCZOS)


def crop_to_aspect(img: Image.Image, target_size: tuple[int, int]) -> Image.Image:
    tw, th = target_size
    src_ratio = img.width / img.height
    tgt_ratio = tw / th
    if src_ratio > tgt_ratio:
        # too wide — crop horizontally
        new_w = round(img.height * tgt_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    else:
        new_h = round(img.width / tgt_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))
    return img.resize((tw, th), Image.LANCZOS)


def process(wid: str, src_name: str, variant: str | None) -> None:
    src_path = SRC / src_name
    if not src_path.exists():
        print(f"  MISSING: {src_name}")
        return
    img = Image.open(src_path)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    if img.mode == "RGBA":
        bg = Image.new("RGB", img.size, (0, 0, 0))
        bg.paste(img, mask=img.split()[3])
        img = bg

    full_img = resize_max_width(img, FULL_MAX_WIDTH)
    full_out = OUT_FULL / output_name(wid, variant, "webp")
    full_img.save(full_out, "WEBP", quality=FULL_QUALITY, method=6)

    thumb_img = crop_to_aspect(img, THUMB_SIZE)
    thumb_out = OUT_THUMB / output_name(wid, variant, "webp")
    thumb_img.save(thumb_out, "WEBP", quality=THUMB_QUALITY, method=6)

    print(f"  {wid:14s} {variant or '—':5s}  full={full_out.stat().st_size//1024:4d}KB  thumb={thumb_out.stat().st_size//1024:3d}KB")


def main() -> None:
    OUT_FULL.mkdir(parents=True, exist_ok=True)
    OUT_THUMB.mkdir(parents=True, exist_ok=True)
    print(f"Source: {SRC}")
    print(f"Output: {OUT_FULL.parent}")
    for wid, src_name, variant in WALLPAPERS:
        process(wid, src_name, variant)
    print(f"Done. {len(WALLPAPERS)} wallpapers processed.")


if __name__ == "__main__":
    main()
