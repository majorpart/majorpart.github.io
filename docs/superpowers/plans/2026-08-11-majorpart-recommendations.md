# Majorpart Recommendation Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a static, SEO-friendly bilingual recommendation page at `majorpart.github.io` listing 13 AI image tools in a pale-green vertical editorial layout.

**Architecture:** Pure static files in the repo root. All copy lives in `index.html` (no JS content injection). `styles.css` owns the “苔色书签” look and motion. `robots.txt` + `sitemap.xml` support crawlers. Optional tiny JS only for scroll reveal if CSS alone is insufficient; content must remain in HTML.

**Tech Stack:** HTML5, CSS3, Google Fonts (Cormorant Garamond, Noto Serif SC, IBM Plex Sans), GitHub Pages.

## Global Constraints

- No backend, no build step, no SPA frameworks
- All visible site copy must appear in HTML source for crawlers
- Vertical list only — no cards (no bordered/shadowed/rounded content boxes)
- Bilingual: Chinese above, English below (muted)
- Brand: Majorpart as hero-level `h1`
- Palette: Mist `#EEF4EF`, Soft `#F7FBF8`, Sage `#B7CFC0`, Moss `#4F6F5C`, Ink `#1C2A22`, Mute `#6B7F72`
- External links: `https://` + lowercase domain, `target="_blank"`, `rel="noopener noreferrer"`
- Site order fixed per design spec section 4.2
- Respect `prefers-reduced-motion`

## File Structure

| File | Responsibility |
|------|----------------|
| `index.html` | Semantic page, SEO meta, JSON-LD, all 13 entries |
| `styles.css` | Tokens, layout, typography, motion |
| `robots.txt` | Allow crawling |
| `sitemap.xml` | Homepage URL for crawlers |

---

### Task 1: Base stylesheet (苔色书签 tokens + layout)

**Files:**
- Create: `styles.css`

**Interfaces:**
- Consumes: none
- Produces: CSS custom properties and classes used by `index.html`: `.site`, `.brand-rail`, `.site-header`, `.lede`, `.recommendations`, `.recommendation`, `.site-name`, `.domain`, `.desc-zh`, `.desc-en`, `.tags`, `.tag`, `.reason-zh`, `.reason-en`, `.visit`, `.site-footer`

- [ ] **Step 1: Create `styles.css` with the following content**

```css
:root {
  --mist: #eef4ef;
  --soft: #f7fbf8;
  --sage: #b7cfc0;
  --moss: #4f6f5c;
  --ink: #1c2a22;
  --mute: #6b7f72;
  --content-width: 44rem;
  --font-display: "Cormorant Garamond", "Noto Serif SC", serif;
  --font-body: "Noto Serif SC", "Cormorant Garamond", serif;
  --font-meta: "IBM Plex Sans", "Noto Sans SC", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--ink);
  background:
    radial-gradient(120% 80% at 10% -10%, var(--soft), transparent 55%),
    linear-gradient(180deg, var(--soft) 0%, var(--mist) 32%, var(--mist) 100%);
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
}

.site {
  position: relative;
  width: min(100% - 2.5rem, var(--content-width));
  margin: 0 auto;
  padding: 4.5rem 0 5rem;
}

.brand-rail {
  position: fixed;
  top: 0;
  left: max(0.75rem, calc(50% - var(--content-width) / 2 - 2rem));
  width: 1px;
  height: 100vh;
  background: var(--moss);
  opacity: 0.45;
  animation: rail-breathe 6s ease-in-out infinite;
  pointer-events: none;
}

.site-header {
  margin-bottom: 3.5rem;
  animation: fade-up 0.9s ease both;
}

.site-header h1 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(3rem, 8vw, 4.75rem);
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--moss);
}

.lede {
  margin: 1.25rem 0 0;
  max-width: 36rem;
}

.lede p {
  margin: 0.35rem 0 0;
}

.lede .en {
  color: var(--mute);
  font-size: 0.95rem;
}

.recommendations {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.recommendation {
  padding: 2.25rem 0;
  border-top: 1px solid var(--sage);
  opacity: 0;
  transform: translateY(0.6rem);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.recommendation.is-visible,
.recommendation.no-js {
  opacity: 1;
  transform: none;
}

.recommendation:last-child {
  border-bottom: 1px solid var(--sage);
}

.site-name {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 500;
  line-height: 1.15;
}

.site-name a {
  color: var(--ink);
  text-decoration: none;
  background-image: linear-gradient(var(--moss), var(--moss));
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 1px;
  transition: background-size 0.35s ease, color 0.2s ease;
}

.site-name a:hover,
.site-name a:focus-visible,
.visit:hover,
.visit:focus-visible {
  color: var(--moss);
  background-size: 100% 1px;
  outline: none;
}

.domain {
  margin: 0.4rem 0 1rem;
  font-family: var(--font-meta);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  color: var(--mute);
}

.desc-zh,
.reason-zh {
  margin: 0.55rem 0 0;
}

.desc-en,
.reason-en {
  margin: 0.2rem 0 0;
  color: var(--mute);
  font-size: 0.95rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.9rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  font-family: var(--font-meta);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--moss);
}

.tags.en {
  margin-top: 0.35rem;
  color: var(--mute);
}

.reason-label {
  display: block;
  margin-top: 1.1rem;
  font-family: var(--font-meta);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sage);
}

.visit {
  display: inline-block;
  margin-top: 1.15rem;
  font-family: var(--font-meta);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--moss);
  text-decoration: none;
  background-image: linear-gradient(var(--moss), var(--moss));
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 1px;
  transition: background-size 0.35s ease, color 0.2s ease;
}

.site-footer {
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--sage);
  font-family: var(--font-meta);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--mute);
}

.site-footer p {
  margin: 0.25rem 0;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes rail-breathe {
  0%,
  100% {
    opacity: 0.28;
  }
  50% {
    opacity: 0.55;
  }
}

@media (max-width: 640px) {
  .site {
    width: min(100% - 1.5rem, var(--content-width));
    padding-top: 3rem;
  }

  .brand-rail {
    left: 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .brand-rail,
  .site-header,
  .recommendation {
    animation: none;
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 2: Verify file exists**

Run (PowerShell): `Test-Path styles.css`
Expected: `True`

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "style: add moss bookmark base stylesheet"
```

---

### Task 2: HTML shell, SEO, fonts, header/footer, reveal script

**Files:**
- Create: `index.html`
- Create: `reveal.js` (tiny progressive enhancement; page remains fully readable without it)

**Interfaces:**
- Consumes: CSS classes from Task 1
- Produces: Document structure with empty `<div class="recommendations" id="recommendations"></div>` ready for Task 3 articles; `Reveal.init()` marks `.recommendation` with `.is-visible`

- [ ] **Step 1: Create `reveal.js`**

```js
(function () {
  var nodes = document.querySelectorAll(".recommendation");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach(function (node) {
    observer.observe(node);
  });
})();
```

- [ ] **Step 2: Create `index.html` shell** (recommendations body filled in Task 3; keep the placeholder comment)

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Majorpart — AI 图像工具推荐 / Curated AI Image Tools</title>
    <meta
      name="description"
      content="Majorpart 收藏的 AI 图像工具推荐：生成、增强、检测、扩图、去水印等。Curated AI image tools for generation, enhancement, detection, expansion, and cleanup."
    />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://majorpart.github.io/" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Sans:wght@400;500&family=Noto+Serif+SC:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Majorpart AI Image Tool Recommendations",
        "description": "A curated bilingual list of AI image tools.",
        "url": "https://majorpart.github.io/",
        "numberOfItems": 13,
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"YeVideo","url":"https://yevideo.io"},
          {"@type":"ListItem","position":2,"name":"Kirkify","url":"https://kirkify.info"},
          {"@type":"ListItem","position":3,"name":"Meme Picture","url":"https://memepicture.info"},
          {"@type":"ListItem","position":4,"name":"Picture Enhancer","url":"https://pictureenhancer.info"},
          {"@type":"ListItem","position":5,"name":"Photo to Excel","url":"https://phototoexcel.info"},
          {"@type":"ListItem","position":6,"name":"Merge Two Photos","url":"https://mergetwophotos.info"},
          {"@type":"ListItem","position":7,"name":"Is This AI Image","url":"https://isthisaiimage.info"},
          {"@type":"ListItem","position":8,"name":"AI Image Expander","url":"https://aiimageexpander.info"},
          {"@type":"ListItem","position":9,"name":"AI for Image Generation","url":"https://aiforimagegeneration.com"},
          {"@type":"ListItem","position":10,"name":"AI Image Remover","url":"https://ai-image-remover.com"},
          {"@type":"ListItem","position":11,"name":"Best AI to Generate Images","url":"https://bestaitogenerateimages.com"},
          {"@type":"ListItem","position":12,"name":"Image to Image AI","url":"https://imagetoimageai.live"},
          {"@type":"ListItem","position":13,"name":"AI Image Cleaner","url":"https://ai-image-cleaner.com"}
        ]
      }
    </script>
  </head>
  <body>
    <div class="brand-rail" aria-hidden="true"></div>
    <div class="site">
      <header class="site-header">
        <h1>Majorpart</h1>
        <div class="lede">
          <p>一份安静的 AI 图像工具收藏，按用途挑选，供查阅与跳转。</p>
          <p class="en">A quiet collection of AI image tools — curated for reference and discovery.</p>
        </div>
      </header>

      <main>
        <section class="recommendations" id="recommendations" aria-label="推荐网站 / Recommended sites">
          <!-- Task 3 inserts 13 <article class="recommendation"> blocks here -->
        </section>
      </main>

      <footer class="site-footer">
        <p>Majorpart · 个人收藏推荐页</p>
        <p>Personal curation · No backend · Static on GitHub Pages</p>
      </footer>
    </div>
    <script src="reveal.js" defer></script>
  </body>
</html>
```

- [ ] **Step 3: Verify title and stylesheet link**

Run: `Select-String -Path index.html -Pattern "Majorpart","styles.css","application/ld\+json"`
Expected: matches for brand, CSS, and JSON-LD

- [ ] **Step 4: Commit**

```bash
git add index.html reveal.js
git commit -m "feat: add page shell with SEO meta and reveal script"
```

---

### Task 3: All 13 recommendation articles (full bilingual copy in HTML)

**Files:**
- Modify: `index.html` — replace the Task 3 comment inside `#recommendations` with the articles below

**Interfaces:**
- Consumes: `.recommendation` markup contract from Task 1/2
- Produces: 13 crawlable articles; each `h2.site-name a` and `a.visit` share the same `https://` URL

**Article template (repeat for each site):**

```html
<article class="recommendation" id="yevideo">
  <h2 class="site-name"><a href="https://yevideo.io" target="_blank" rel="noopener noreferrer">YeVideo</a></h2>
  <p class="domain">yevideo.io</p>
  <p class="desc-zh">...</p>
  <p class="desc-en">...</p>
  <ul class="tags" aria-label="中文标签">...</ul>
  <ul class="tags en" aria-label="English tags">...</ul>
  <span class="reason-label">推荐理由 / Why</span>
  <p class="reason-zh">...</p>
  <p class="reason-en">...</p>
  <a class="visit" href="https://yevideo.io" target="_blank" rel="noopener noreferrer">访问网站 / Visit</a>
</article>
```

- [ ] **Step 1: Insert all 13 articles with this exact copy**

**1. YeVideo — https://yevideo.io**
- 中文介绍：面向短视频与动态画面的 AI 辅助创作站点，适合快速生成或处理视频相关素材。
- 英文介绍：An AI-assisted site for short-form and motion-oriented creative work, useful for generating or processing video-related assets quickly.
- 中文标签：`视频` `AI创作` `动态画面`
- 英文标签：`Video` `AI Creation` `Motion`
- 中文理由：当你需要把「图像工作流」延伸到视频侧时，这是清单里明确指向动态内容的入口。
- 英文理由：A clear entry point when your image workflow needs to extend into motion and short video.

**2. Kirkify — https://kirkify.info**
- 中文介绍：轻量的图像玩法与趣味生成工具站，强调快速试玩与分享向的视觉效果。
- 英文介绍：A lightweight playground for playful image generation and shareable visual effects.
- 中文标签：`趣味生成` `图像玩法` `轻量工具`
- 英文标签：`Playful` `Image Effects` `Lightweight`
- 中文理由：适合灵感试水：打开就能试，不需要沉重的学习成本。
- 英文理由：Good for quick inspiration — try ideas without a heavy learning curve.

**3. Meme Picture — https://memepicture.info**
- 中文介绍：围绕梗图与表情包场景的图片工具，帮助把想法快速做成可传播的画面。
- 英文介绍：Image tools oriented around memes and reaction images, helping turn ideas into shareable frames.
- 中文标签：`梗图` `表情包` `社交传播`
- 英文标签：`Memes` `Reactions` `Social`
- 中文理由：内容传播场景里，梗图往往比「精修大图」更刚需；这个站点对准了这一用途。
- 英文理由：In social distribution, meme frames often matter more than heavy retouching — this site targets that need.

**4. Picture Enhancer — https://pictureenhancer.info**
- 中文介绍：聚焦照片与插画的画质增强：清晰度、观感与细节表现的一站式增强入口。
- 英文介绍：Focused on enhancing photos and illustrations — sharpness, look, and detail in one place.
- 中文标签：`画质增强` `清晰度` `修图辅助`
- 英文标签：`Enhancement` `Clarity` `Retouch Assist`
- 中文理由：素材偏糊或偏平的时候，先增强再进入后续创作，往往更省事。
- 英文理由：When assets look soft or flat, enhancing first usually saves time downstream.

**5. Photo to Excel — https://phototoexcel.info**
- 中文介绍：把表格照片或截图中的数据提取到 Excel，减少手工录入。
- 英文介绍：Extracts tabular data from photos or screenshots into Excel to reduce manual entry.
- 中文标签：`OCR` `表格提取` `Excel`
- 英文标签：`OCR` `Tables` `Excel`
- 中文理由：图像工具清单里少见却很实用的「从图片到表格」能力，值得单独收藏。
- 英文理由：A rare but practical photo-to-spreadsheet capability worth keeping in a curated list.

**6. Merge Two Photos — https://mergetwophotos.info**
- 中文介绍：将两张照片合成到同一画面，适合对比、拼贴与简单合成需求。
- 英文介绍：Combines two photos into one frame for comparisons, collages, and simple composites.
- 中文标签：`照片合成` `拼贴` `对比图`
- 英文标签：`Merge` `Collage` `Comparison`
- 中文理由：很多展示场景只需要「两图合一」，不必上完整图层编辑器。
- 英文理由：Many presentation needs are just “two images, one frame” — no full editor required.

**7. Is This AI Image — https://isthisaiimage.info**
- 中文介绍：协助判断图像是否可能由 AI 生成，用于内容审核、求真与素材筛查。
- 英文介绍：Helps assess whether an image may be AI-generated — useful for review, verification, and screening.
- 中文标签：`AI检测` `真伪判断` `内容审核`
- 英文标签：`AI Detection` `Verification` `Moderation`
- 中文理由：生成工具越来越多时，「识别」与「生成」同样重要；此站补上检测侧能力。
- 英文理由：As generators multiply, detection matters as much as creation — this covers the verification side.

**8. AI Image Expander — https://aiimageexpander.info**
- 中文介绍：用 AI 向外扩展画面边界，适合补全构图、改比例与做出更宽的视觉场景。
- 英文介绍：Expands image boundaries with AI — useful for reframing, aspect changes, and wider scenes.
- 中文标签：`扩图` `构图补全` `比例调整`
- 英文标签：`Outpainting` `Reframe` `Aspect Ratio`
- 中文理由：原图构图不够用时，扩图往往比重拍或重绘更直接。
- 英文理由：When framing is too tight, expansion is often faster than reshooting or redrawing.

**9. AI for Image Generation — https://aiforimagegeneration.com**
- 中文介绍：面向文生图与通用 AI 图像生成的入口站，适合从提示词出发创建新画面。
- 英文介绍：An entry point for text-to-image and general AI image generation from prompts.
- 中文标签：`文生图` `提示词` `图像生成`
- 英文标签：`Text-to-Image` `Prompts` `Generation`
- 中文理由：清单需要一个明确的「从零生成」主入口，此站承担该角色。
- 英文理由：The list needs a clear “generate from scratch” hub — this site fills that role.

**10. AI Image Remover — https://ai-image-remover.com**
- 中文介绍：移除画面中的多余物体、人物或干扰元素，让主体更干净。
- 英文介绍：Removes unwanted objects, people, or distractions so the subject stays clean.
- 中文标签：`物体移除` `画面清理` `修图`
- 英文标签：`Object Removal` `Cleanup` `Retouch`
- 中文理由：实拍与合成图都常有「多余元素」；专用移除工具比通用编辑更聚焦。
- 英文理由：Photos and composites often carry clutter — a dedicated remover stays more focused than a general editor.

**11. Best AI to Generate Images — https://bestaitogenerateimages.com**
- 中文介绍：汇总与导览「适合生成图像的 AI」选择，帮助比较不同生成路径。
- 英文介绍：A guide-style hub for choosing AI image generators and comparing generation paths.
- 中文标签：`选型导览` `生成工具` `对比参考`
- 英文标签：`Guide` `Generators` `Comparison`
- 中文理由：当你还没决定用哪条生成路线时，先看导览站能减少盲目试错。
- 英文理由：When you have not picked a generation path yet, a guide hub reduces blind trial-and-error.

**12. Image to Image AI — https://imagetoimageai.live**
- 中文介绍：以现有图片为起点做图生图变换，保留结构的同时探索新风格与变体。
- 英文介绍：Image-to-image transformation from an existing photo — new styles and variants while keeping structure.
- 中文标签：`图生图` `风格变换` `变体`
- 英文标签：`Image-to-Image` `Style Transfer` `Variants`
- 中文理由：已有参考图时，图生图通常比纯文生图更可控。
- 英文理由：With a reference image in hand, img2img is usually more controllable than text-only generation.

**13. AI Image Cleaner — https://ai-image-cleaner.com**
- 中文介绍：清理噪点、瑕疵与画面杂质，让图像更干净、更适合后续使用或发布。
- 英文介绍：Cleans noise, blemishes, and visual clutter so images are ready for reuse or publishing.
- 中文标签：`图像清理` `去瑕疵` `发布前处理`
- 英文标签：`Cleanup` `Denoise` `Pre-publish`
- 中文理由：和「移除物体」互补：更偏整体洁净与观感整理，适合作为发布前最后一步。
- 英文理由：Complements object removal with overall cleanup — a practical last step before publishing.

Each article must use the template fields above with matching `href` on both the title and Visit link.

- [ ] **Step 2: Verify all 13 domains appear as https links**

Run:

```powershell
$domains = @(
  'yevideo.io','kirkify.info','memepicture.info','pictureenhancer.info',
  'phototoexcel.info','mergetwophotos.info','isthisaiimage.info','aiimageexpander.info',
  'aiforimagegeneration.com','ai-image-remover.com','bestaitogenerateimages.com',
  'imagetoimageai.live','ai-image-cleaner.com'
)
foreach ($d in $domains) {
  if (-not (Select-String -Path index.html -Pattern "https://$d" -Quiet)) { Write-Output "MISSING $d" }
}
Write-Output "done"
```

Expected: only `done` (no MISSING lines). Also confirm `article class="recommendation"` count is 13:

```powershell
(Select-String -Path index.html -Pattern 'class="recommendation"' -AllMatches).Matches.Count
```

Expected: `13`

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add bilingual recommendation entries for 13 sites"
```

---

### Task 4: robots.txt + sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

**Interfaces:**
- Consumes: canonical site URL `https://majorpart.github.io/`
- Produces: crawler hints aligned with SEO section of the design spec

- [ ] **Step 1: Create `robots.txt`**

```txt
User-agent: *
Allow: /

Sitemap: https://majorpart.github.io/sitemap.xml
```

- [ ] **Step 2: Create `sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://majorpart.github.io/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Verify**

Run: `Test-Path robots.txt; Test-Path sitemap.xml`
Expected: `True` / `True`

- [ ] **Step 4: Commit**

```bash
git add robots.txt sitemap.xml
git commit -m "chore: add robots.txt and sitemap for GitHub Pages SEO"
```

---

### Task 5: Visual & SEO verification

**Files:**
- Modify only if bugs found: `index.html`, `styles.css`, `reveal.js`

**Interfaces:**
- Consumes: complete site from Tasks 1–4
- Produces: verified page ready to push

- [ ] **Step 1: Open locally**

Run: `Start-Process index.html`  
Check: brand Majorpart dominant; pale green page; vertical entries; no cards; CN then EN; name + Visit open new tabs.

- [ ] **Step 2: View-source sanity**

Confirm “查看网页源代码” / raw file contains Chinese and English paragraphs for sites (not empty containers filled by JS).

- [ ] **Step 3: Reduced motion spot-check**

In DevTools, emulate `prefers-reduced-motion: reduce` — entries visible without relying on animation.

- [ ] **Step 4: Final commit only if fixes were needed**

```bash
git add -A
git commit -m "fix: polish layout or copy after local verification"
```

(Skip commit if nothing changed.)

- [ ] **Step 5: Push when user requests**

```bash
git push -u origin main
```

Then remind user to enable Pages: Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

---

## Spec Coverage Checklist

| Spec requirement | Task |
|------------------|------|
| Static HTML, no backend | 1–4 |
| Crawlable bilingual copy in HTML | 3 |
| Vertical list, no cards | 1, 3 |
| Majorpart brand hero | 2 |
| Pale green “苔色书签” tokens | 1 |
| Name + Visit links | 3 |
| 13 sites in fixed order | 3 |
| robots.txt + sitemap | 4 |
| JSON-LD ItemList | 2 |
| Motion + reduced-motion | 1, 2, 5 |
| GitHub Pages deploy notes | 5 |

## Placeholder Scan

No TBD/TODO steps. Copy for all 13 sites is specified in Task 3.
