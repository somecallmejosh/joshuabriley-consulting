#!/usr/bin/env python3
"""Dedup inline <style> blocks against styles/global.css and inject a link tag."""
import re, pathlib, sys

ROOT = pathlib.Path("/Users/joshuabriley/Desktop/redesign")
GLOBAL_CSS = (ROOT / "styles/global.css").read_text()

def strip_comments(css: str) -> str:
    return re.sub(r"/\*.*?\*/", "", css, flags=re.DOTALL)

def split_rules(css: str):
    css = strip_comments(css)
    """Split CSS into top-level rules. Returns list of (key, full_text)."""
    rules = []
    i, n = 0, len(css)
    while i < n:
        while i < n and css[i] in " \t\r\n":
            i += 1
        if i >= n:
            break
        start = i
        depth = 0
        first_brace = -1
        while i < n:
            c = css[i]
            if c == "{":
                if first_brace < 0:
                    first_brace = i
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    i += 1
                    break
            i += 1
        full = css[start:i].strip()
        if not full:
            continue
        selector = css[start:first_brace].strip() if first_brace > 0 else full
        key = re.sub(r"\s+", " ", selector)
        rules.append((key, full))
    return rules

def normalize(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()

global_rules = split_rules(GLOBAL_CSS)
global_keys = {k: normalize(v) for k, v in global_rules}

STYLE_RE = re.compile(r"(\s*)<style>(.*?)</style>", re.DOTALL)
LINK_TAG = '<link rel="stylesheet" href="/styles/global.css" />'

def process(path: pathlib.Path):
    html = path.read_text()
    m = STYLE_RE.search(html)
    if not m:
        return False, "no <style> block"
    indent = m.group(1).lstrip("\n").rstrip() or "    "
    inner = m.group(2)
    rules = split_rules(inner)
    kept = []
    removed = 0
    for k, full in rules:
        if k in global_keys and normalize(full) == global_keys[k]:
            removed += 1
            continue
        kept.append(full)

    if kept:
        body = "\n".join("      " + line if line else "" for r in kept for line in r.split("\n"))
        replacement = f"\n{indent}<style>\n{body}\n{indent}</style>"
    else:
        replacement = ""

    new_html = html[:m.start()] + replacement + html[m.end():]

    # Inject link tag (idempotent), placed before the (possibly now-removed) style block
    if "/styles/global.css" not in new_html:
        # insert after the fonts <link ... rel="stylesheet" /> line
        font_link = re.search(r'<link\s+href="https://fonts\.googleapis\.com[^>]*?rel="stylesheet"\s*/>', new_html)
        if font_link:
            insert_at = font_link.end()
            new_html = new_html[:insert_at] + f"\n{indent}{LINK_TAG}" + new_html[insert_at:]
        else:
            # fallback: before </head>
            new_html = new_html.replace("</head>", f"{indent}{LINK_TAG}\n  </head>", 1)

    path.write_text(new_html)
    return True, f"removed {removed} dup rules, {len(kept)} kept"

files = sorted(ROOT.glob("**/*.html"))
for f in files:
    if "plans" in f.parts or "prototype" in f.parts:
        continue
    ok, msg = process(f)
    print(f"{f.relative_to(ROOT)}: {msg}")
