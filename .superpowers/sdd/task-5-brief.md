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

