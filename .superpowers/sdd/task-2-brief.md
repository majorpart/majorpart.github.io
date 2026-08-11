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
    <title>Majorpart 鈥?AI 鍥惧儚宸ュ叿鎺ㄨ崘 / Curated AI Image Tools</title>
    <meta
      name="description"
      content="Majorpart 鏀惰棌鐨?AI 鍥惧儚宸ュ叿鎺ㄨ崘锛氱敓鎴愩€佸寮恒€佹娴嬨€佹墿鍥俱€佸幓姘村嵃绛夈€侰urated AI image tools for generation, enhancement, detection, expansion, and cleanup."
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
          <p>涓€浠藉畨闈欑殑 AI 鍥惧儚宸ュ叿鏀惰棌锛屾寜鐢ㄩ€旀寫閫夛紝渚涙煡闃呬笌璺宠浆銆?/p>
          <p class="en">A quiet collection of AI image tools 鈥?curated for reference and discovery.</p>
        </div>
      </header>

      <main>
        <section class="recommendations" id="recommendations" aria-label="鎺ㄨ崘缃戠珯 / Recommended sites">
          <!-- Task 3 inserts 13 <article class="recommendation"> blocks here -->
        </section>
      </main>

      <footer class="site-footer">
        <p>Majorpart 路 涓汉鏀惰棌鎺ㄨ崘椤?/p>
        <p>Personal curation 路 No backend 路 Static on GitHub Pages</p>
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


