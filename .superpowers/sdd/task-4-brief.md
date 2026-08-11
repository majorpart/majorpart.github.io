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

