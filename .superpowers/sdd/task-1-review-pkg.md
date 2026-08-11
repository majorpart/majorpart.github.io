# Review Package
Base: 2f20e1cdae5fb7be25e9219532c64a643fb37d01
Head: 56d90b2b16fde0f23fadedf602bf631e6e602260

## Commits
56d90b2 style: add moss bookmark base stylesheet


## Stat
 styles.css | 259 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 259 insertions(+)


## Diff
diff --git a/styles.css b/styles.css
new file mode 100644
index 0000000..0d8e043
--- /dev/null
+++ b/styles.css
@@ -0,0 +1,259 @@
+:root {
+  --mist: #eef4ef;
+  --soft: #f7fbf8;
+  --sage: #b7cfc0;
+  --moss: #4f6f5c;
+  --ink: #1c2a22;
+  --mute: #6b7f72;
+  --content-width: 44rem;
+  --font-display: "Cormorant Garamond", "Noto Serif SC", serif;
+  --font-body: "Noto Serif SC", "Cormorant Garamond", serif;
+  --font-meta: "IBM Plex Sans", "Noto Sans SC", sans-serif;
+}
+
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
+}
+
+html {
+  scroll-behavior: smooth;
+}
+
+body {
+  margin: 0;
+  min-height: 100vh;
+  color: var(--ink);
+  background:
+    radial-gradient(120% 80% at 10% -10%, var(--soft), transparent 55%),
+    linear-gradient(180deg, var(--soft) 0%, var(--mist) 32%, var(--mist) 100%);
+  font-family: var(--font-body);
+  font-size: 1.05rem;
+  line-height: 1.75;
+  -webkit-font-smoothing: antialiased;
+}
+
+.site {
+  position: relative;
+  width: min(100% - 2.5rem, var(--content-width));
+  margin: 0 auto;
+  padding: 4.5rem 0 5rem;
+}
+
+.brand-rail {
+  position: fixed;
+  top: 0;
+  left: max(0.75rem, calc(50% - var(--content-width) / 2 - 2rem));
+  width: 1px;
+  height: 100vh;
+  background: var(--moss);
+  opacity: 0.45;
+  animation: rail-breathe 6s ease-in-out infinite;
+  pointer-events: none;
+}
+
+.site-header {
+  margin-bottom: 3.5rem;
+  animation: fade-up 0.9s ease both;
+}
+
+.site-header h1 {
+  margin: 0;
+  font-family: var(--font-display);
+  font-weight: 500;
+  font-size: clamp(3rem, 8vw, 4.75rem);
+  letter-spacing: 0.02em;
+  line-height: 1;
+  color: var(--moss);
+}
+
+.lede {
+  margin: 1.25rem 0 0;
+  max-width: 36rem;
+}
+
+.lede p {
+  margin: 0.35rem 0 0;
+}
+
+.lede .en {
+  color: var(--mute);
+  font-size: 0.95rem;
+}
+
+.recommendations {
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+}
+
+.recommendation {
+  padding: 2.25rem 0;
+  border-top: 1px solid var(--sage);
+  opacity: 0;
+  transform: translateY(0.6rem);
+  transition: opacity 0.7s ease, transform 0.7s ease;
+}
+
+.recommendation.is-visible,
+.recommendation.no-js {
+  opacity: 1;
+  transform: none;
+}
+
+.recommendation:last-child {
+  border-bottom: 1px solid var(--sage);
+}
+
+.site-name {
+  margin: 0;
+  font-family: var(--font-display);
+  font-size: clamp(1.75rem, 4vw, 2.35rem);
+  font-weight: 500;
+  line-height: 1.15;
+}
+
+.site-name a {
+  color: var(--ink);
+  text-decoration: none;
+  background-image: linear-gradient(var(--moss), var(--moss));
+  background-position: 0 100%;
+  background-repeat: no-repeat;
+  background-size: 0 1px;
+  transition: background-size 0.35s ease, color 0.2s ease;
+}
+
+.site-name a:hover,
+.site-name a:focus-visible,
+.visit:hover,
+.visit:focus-visible {
+  color: var(--moss);
+  background-size: 100% 1px;
+  outline: none;
+}
+
+.domain {
+  margin: 0.4rem 0 1rem;
+  font-family: var(--font-meta);
+  font-size: 0.78rem;
+  letter-spacing: 0.08em;
+  text-transform: lowercase;
+  color: var(--mute);
+}
+
+.desc-zh,
+.reason-zh {
+  margin: 0.55rem 0 0;
+}
+
+.desc-en,
+.reason-en {
+  margin: 0.2rem 0 0;
+  color: var(--mute);
+  font-size: 0.95rem;
+}
+
+.tags {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.45rem 0.9rem;
+  margin: 1rem 0 0;
+  padding: 0;
+  list-style: none;
+  font-family: var(--font-meta);
+  font-size: 0.75rem;
+  letter-spacing: 0.06em;
+  color: var(--moss);
+}
+
+.tags.en {
+  margin-top: 0.35rem;
+  color: var(--mute);
+}
+
+.reason-label {
+  display: block;
+  margin-top: 1.1rem;
+  font-family: var(--font-meta);
+  font-size: 0.72rem;
+  letter-spacing: 0.1em;
+  text-transform: uppercase;
+  color: var(--sage);
+}
+
+.visit {
+  display: inline-block;
+  margin-top: 1.15rem;
+  font-family: var(--font-meta);
+  font-size: 0.85rem;
+  letter-spacing: 0.04em;
+  color: var(--moss);
+  text-decoration: none;
+  background-image: linear-gradient(var(--moss), var(--moss));
+  background-position: 0 100%;
+  background-repeat: no-repeat;
+  background-size: 0 1px;
+  transition: background-size 0.35s ease, color 0.2s ease;
+}
+
+.site-footer {
+  margin-top: 3.5rem;
+  padding-top: 1.5rem;
+  border-top: 1px solid var(--sage);
+  font-family: var(--font-meta);
+  font-size: 0.78rem;
+  letter-spacing: 0.04em;
+  color: var(--mute);
+}
+
+.site-footer p {
+  margin: 0.25rem 0;
+}
+
+@keyframes fade-up {
+  from {
+    opacity: 0;
+    transform: translateY(0.75rem);
+  }
+  to {
+    opacity: 1;
+    transform: none;
+  }
+}
+
+@keyframes rail-breathe {
+  0%,
+  100% {
+    opacity: 0.28;
+  }
+  50% {
+    opacity: 0.55;
+  }
+}
+
+@media (max-width: 640px) {
+  .site {
+    width: min(100% - 1.5rem, var(--content-width));
+    padding-top: 3rem;
+  }
+
+  .brand-rail {
+    left: 0.5rem;
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  html {
+    scroll-behavior: auto;
+  }
+
+  .brand-rail,
+  .site-header,
+  .recommendation {
+    animation: none;
+    transition: none;
+    opacity: 1;
+    transform: none;
+  }
+}

