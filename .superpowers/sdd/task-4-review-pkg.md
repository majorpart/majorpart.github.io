# Review Package
Base: a539afaa1468a600f7f56fd860da5e7a8f2631b5
Head: b9cfb0a35278b8d986d291095d465543ab5d1d42

## Commits
b9cfb0a chore: add robots.txt and sitemap for GitHub Pages SEO

## Stat
 robots.txt  | 4 ++++
 sitemap.xml | 8 ++++++++
 2 files changed, 12 insertions(+)

## Diff
diff --git a/robots.txt b/robots.txt
new file mode 100644
index 0000000..dd7278d
--- /dev/null
+++ b/robots.txt
@@ -0,0 +1,4 @@
+User-agent: *
+Allow: /
+
+Sitemap: https://majorpart.github.io/sitemap.xml
diff --git a/sitemap.xml b/sitemap.xml
new file mode 100644
index 0000000..f217b8e
--- /dev/null
+++ b/sitemap.xml
@@ -0,0 +1,8 @@
+<?xml version="1.0" encoding="UTF-8"?>
+<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
+  <url>
+    <loc>https://majorpart.github.io/</loc>
+    <changefreq>monthly</changefreq>
+    <priority>1.0</priority>
+  </url>
+</urlset>
