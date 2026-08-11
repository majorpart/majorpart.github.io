# Task 5 Report: Visual & SEO verification

**Status:** PASS (no critical bugs; no code changes; no commit)

**Date:** 2026-08-11  
**Server:** `npx --yes serve -l 4173 .` → `http://127.0.0.1:4173/`  
**Browser:** Chrome DevTools MCP (`user-chrome-devtools`)

---

## Checklist

### 1. Visual (local open)

| Check | Result | Evidence |
| --- | --- | --- |
| Brand **Majorpart** dominant | PASS | `h1` font-size **76px**, color `rgb(79, 111, 92)` (moss); largest hero signal |
| Pale green page | PASS | Body background: soft→mist radial/linear greens (`#f7fbf8` / `#eef4ef`) |
| Vertical entries | PASS | `.recommendations` `flex-direction: column`; 13 stacked articles |
| No cards | PASS | Entries: `box-shadow: none`, `background: transparent`, `border-radius: 0`; hairline `border-top` only; no card selectors in CSS |
| CN then EN | PASS | Viewport + a11y: Chinese lede/desc/reason before English counterparts |
| Name + Visit (new tabs) | PASS | All 13 name links + 26 `target="_blank"` Visit links; Visit text `访问网站 / Visit` |

**Screenshot:** viewport capture via DevTools `take_screenshot` showed Majorpart hero, pale green field, YeVideo + Kirkify entries (CN/EN, tags, Visit), no card chrome.

**A11y snapshot:** full list of 13 sites with bilingual copy and Visit links present in accessibility tree.

### 2. View-source / raw HTML SEO

| Check | Result | Evidence |
| --- | --- | --- |
| CN+EN paragraphs in raw HTML (not JS-injected) | PASS | Static counts in `index.html`: 13× `desc-zh`, 13× `desc-en`, 13× `reason-zh`, 13× `reason-en` |
| No content injection in JS | PASS | `reveal.js` only toggles `is-visible`; no `innerHTML` / `textContent` writes |
| Meta / structured data | PASS | bilingual `<title>`, `meta description`, `canonical`, `robots index,follow`, JSON-LD `ItemList` (13 items) |
| `robots.txt` / `sitemap.xml` | PASS | Served at `/robots.txt` and `/sitemap.xml`; Allow `/`; sitemap points to `https://majorpart.github.io/` |

### 3. Reveal / reduced motion

| Check | Result | Evidence |
| --- | --- | --- |
| Reveal on scroll | PASS | Initial: 2 visible in viewport; after per-entry scrollIntoView: **13/13** have `is-visible` (late opacities mid-transition OK) |
| `prefers-reduced-motion` JS path | PASS | Reloaded with `matchMedia` mock → all 13 `is-visible`, opacity `1` immediately |
| CSS reduced-motion fallback | PASS | `@media (prefers-reduced-motion: reduce)` forces `.recommendation { opacity: 1; transform: none; animation/transition: none }` |

---

## Bugs found

**Critical:** none  
**Fixes applied:** none  
**Commit:** skipped (nothing changed in site files)

### Non-critical notes (no fix)

- Programmatic **instant** jump to the last entry can skip mid-list IntersectionObserver callbacks; normal stepwise scroll reveals all. Not user-facing for typical wheel/trackpad use.
- Display fonts load from Google Fonts (network dependency for full typography).

---

## Git

- Working tree site files clean relative to HEAD (`b9cfb0a` SEO chore + prior feat commits).
- Untracked: `.superpowers/` (this SDD report folder only).
- **Not pushed** (per instructions).

---

## Reminder for later (Step 5, when user asks)

```bash
git push -u origin main
```

Then enable GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

---

## Progressive-enhancement reveal fix (2026-08-11)

**Status:** FIXED  
**Commit:** `3562ac5` — `fix: progressive-enhance list reveal so content stays visible`

### Problem

`.recommendation` defaulted to `opacity: 0` until `.is-visible` from `reveal.js` IntersectionObserver. Fast/jump scrolling could leave mid-list entries invisible when IO callbacks were missed.

### Changes

| File | Change |
| --- | --- |
| `index.html` | Inline `<script>document.documentElement.classList.add("js");</script>` before `styles.css` |
| `styles.css` | Hidden-until-reveal only under `html.js .recommendation:not(.is-visible)`; base `.recommendation` fully visible without JS |
| `reveal.js` | On init, mark entries with `getBoundingClientRect().top < window.innerHeight` as `.is-visible` before observing the rest |

### Re-verification (Chrome DevTools MCP, `http://127.0.0.1:4173/`)

| Check | Result | Evidence |
| --- | --- | --- |
| No JS (`html.js` removed) | PASS | All 13 entries `opacity: 1` without `.is-visible` |
| With JS, above-fold on load | PASS | 2 above-fold entries `.is-visible`, `opacity: 1` within 800ms |
| With JS, below-fold | PASS | 3rd entry hidden (`opacity: 0`) until scrolled into view |
| Instant jump scroll (fresh reload) | PASS | After `scrollTop = scrollHeight`, 13/13 `.is-visible`, mid-list `opacity: 1` at 50ms |
| Reduced motion | PASS | Unchanged — JS marks all `.is-visible` immediately; CSS `@media (prefers-reduced-motion: reduce)` forces `opacity: 1` |

---

## Reveal hardening fix (2026-08-11, post-3562ac5 review)

**Status:** FIXED  
**Commit:** `4e0934e` — `fix: harden reveal for jump-scroll and reduced-motion`

### Problem

Instant jump-scroll (End / `scrollTo` bottom) could leave mid-list `.recommendation` entries at `opacity: 0` when IntersectionObserver callbacks were skipped. Reduced-motion CSS lacked specificity to override `html.js .recommendation:not(.is-visible)`.

### Changes

| File | Change |
| --- | --- |
| `reveal.js` | rAF-throttled `scroll`/`resize` fallback calls `shouldReveal()` (viewport intersect **or** scrolled-past via `rect.bottom <= 0`); double-rAF + `setTimeout(0)` safety pass |
| `styles.css` | Added `html.js .recommendation:not(.is-visible) { opacity: 1; transform: none; }` inside `@media (prefers-reduced-motion: reduce)` |

### Re-verification (Chrome DevTools MCP, `http://127.0.0.1:4173/`)

| Check | Result | Evidence |
| --- | --- | --- |
| Instant jump scroll | PASS | After `scrollTo(0, scrollHeight)`: **13/13** `.is-visible`, all `opacity: 1` |
| Initial load (top) | PASS | 2 above-fold visible; 11 below-fold hidden (`opacity: 0`) |
| Reduced-motion CSS rule | PASS | `html.js .recommendation:not(.is-visible)` present inside `prefers-reduced-motion` media query |
| No-JS path | PASS | Unchanged — base `.recommendation` visible without `.js` class |
