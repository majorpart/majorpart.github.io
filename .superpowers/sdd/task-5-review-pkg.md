# Review Package
Base: b9cfb0a35278b8d986d291095d465543ab5d1d42
Head: 4e0934ecc9747b35c75b99855736a715b3616a9e

## Commits
4e0934e fix: harden reveal for jump-scroll and reduced-motion
3562ac5 fix: progressive-enhance list reveal so content stays visible

## Stat
 index.html |  1 +
 reveal.js  | 41 ++++++++++++++++++++++++++++++++++++++++-
 styles.css | 16 +++++++++++++---
 3 files changed, 54 insertions(+), 4 deletions(-)

## Diff
diff --git a/index.html b/index.html
index 8d85f81..704df42 100644
--- a/index.html
+++ b/index.html
@@ -11,16 +11,17 @@
     <meta name="robots" content="index,follow" />
     <link rel="canonical" href="https://majorpart.github.io/" />
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link
       href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Sans:wght@400;500&family=Noto+Serif+SC:wght@400;500;600&display=swap"
       rel="stylesheet"
     />
+    <script>document.documentElement.classList.add("js");</script>
     <link rel="stylesheet" href="styles.css" />
     <script type="application/ld+json">
       {
         "@context": "https://schema.org",
         "@type": "ItemList",
         "name": "Majorpart AI Image Tool Recommendations",
         "description": "A curated bilingual list of AI image tools.",
         "url": "https://majorpart.github.io/",
diff --git a/reveal.js b/reveal.js
index 2f5346d..b8488c9 100644
--- a/reveal.js
+++ b/reveal.js
@@ -23,12 +23,51 @@
           entry.target.classList.add("is-visible");
           observer.unobserve(entry.target);
         }
       });
     },
     { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
   );
 
+  var pending = false;
+
+  function shouldReveal(node) {
+    var rect = node.getBoundingClientRect();
+    if (rect.top < window.innerHeight && rect.bottom > 0) return true;
+    if (rect.bottom <= 0) return true;
+    return false;
+  }
+
+  function markVisibleInViewport() {
+    nodes.forEach(function (node) {
+      if (!node.classList.contains("is-visible") && shouldReveal(node)) {
+        node.classList.add("is-visible");
+        observer.unobserve(node);
+      }
+    });
+  }
+
+  function scheduleViewportCheck() {
+    if (pending) return;
+    pending = true;
+    requestAnimationFrame(function () {
+      pending = false;
+      markVisibleInViewport();
+    });
+  }
+
   nodes.forEach(function (node) {
-    observer.observe(node);
+    if (shouldReveal(node)) {
+      node.classList.add("is-visible");
+    } else {
+      observer.observe(node);
+    }
+  });
+
+  window.addEventListener("scroll", scheduleViewportCheck, { passive: true });
+  window.addEventListener("resize", scheduleViewportCheck, { passive: true });
+
+  requestAnimationFrame(function () {
+    requestAnimationFrame(markVisibleInViewport);
   });
+  setTimeout(markVisibleInViewport, 0);
 })();
diff --git a/styles.css b/styles.css
index 0d8e043..f568d5e 100644
--- a/styles.css
+++ b/styles.css
@@ -86,23 +86,28 @@ body {
   display: flex;
   flex-direction: column;
   gap: 0;
 }
 
 .recommendation {
   padding: 2.25rem 0;
   border-top: 1px solid var(--sage);
+}
+
+html.js .recommendation {
+  transition: opacity 0.7s ease, transform 0.7s ease;
+}
+
+html.js .recommendation:not(.is-visible) {
   opacity: 0;
   transform: translateY(0.6rem);
-  transition: opacity 0.7s ease, transform 0.7s ease;
 }
 
-.recommendation.is-visible,
-.recommendation.no-js {
+html.js .recommendation.is-visible {
   opacity: 1;
   transform: none;
 }
 
 .recommendation:last-child {
   border-bottom: 1px solid var(--sage);
 }
 
@@ -251,9 +256,14 @@ body {
   .brand-rail,
   .site-header,
   .recommendation {
     animation: none;
     transition: none;
     opacity: 1;
     transform: none;
   }
+
+  html.js .recommendation:not(.is-visible) {
+    opacity: 1;
+    transform: none;
+  }
 }
