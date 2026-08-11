# Final Branch Review Package
Base: 2f20e1cdae5fb7be25e9219532c64a643fb37d01
Head: 4e0934ecc9747b35c75b99855736a715b3616a9e

## Commits
4e0934e fix: harden reveal for jump-scroll and reduced-motion
3562ac5 fix: progressive-enhance list reveal so content stays visible
b9cfb0a chore: add robots.txt and sitemap for GitHub Pages SEO
a539afa feat: add bilingual recommendation entries for 13 sites
859154a feat: add page shell with SEO meta and reveal script
56d90b2 style: add moss bookmark base stylesheet

## Stat
 index.html  | 331 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 reveal.js   |  73 ++++++++++++++
 robots.txt  |   4 +
 sitemap.xml |   8 ++
 styles.css  | 269 ++++++++++++++++++++++++++++++++++++++++++++++++
 5 files changed, 685 insertions(+)

## Diff
diff --git a/index.html b/index.html
new file mode 100644
index 0000000..704df42
--- /dev/null
+++ b/index.html
@@ -0,0 +1,331 @@
+<!DOCTYPE html>
+<html lang="zh-CN">
+  <head>
+    <meta charset="utf-8" />
+    <meta name="viewport" content="width=device-width, initial-scale=1" />
+    <title>Majorpart 鈥?AI 鍥惧儚宸ュ叿鎺ㄨ崘 / Curated AI Image Tools</title>
+    <meta
+      name="description"
+      content="Majorpart 鏀惰棌鐨?AI 鍥惧儚宸ュ叿鎺ㄨ崘锛氱敓鎴愩€佸寮恒€佹娴嬨€佹墿鍥俱€佸幓姘村嵃绛夈€侰urated AI image tools for generation, enhancement, detection, expansion, and cleanup."
+    />
+    <meta name="robots" content="index,follow" />
+    <link rel="canonical" href="https://majorpart.github.io/" />
+    <link rel="preconnect" href="https://fonts.googleapis.com" />
+    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+    <link
+      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Sans:wght@400;500&family=Noto+Serif+SC:wght@400;500;600&display=swap"
+      rel="stylesheet"
+    />
+    <script>document.documentElement.classList.add("js");</script>
+    <link rel="stylesheet" href="styles.css" />
+    <script type="application/ld+json">
+      {
+        "@context": "https://schema.org",
+        "@type": "ItemList",
+        "name": "Majorpart AI Image Tool Recommendations",
+        "description": "A curated bilingual list of AI image tools.",
+        "url": "https://majorpart.github.io/",
+        "numberOfItems": 13,
+        "itemListElement": [
+          {"@type":"ListItem","position":1,"name":"YeVideo","url":"https://yevideo.io"},
+          {"@type":"ListItem","position":2,"name":"Kirkify","url":"https://kirkify.info"},
+          {"@type":"ListItem","position":3,"name":"Meme Picture","url":"https://memepicture.info"},
+          {"@type":"ListItem","position":4,"name":"Picture Enhancer","url":"https://pictureenhancer.info"},
+          {"@type":"ListItem","position":5,"name":"Photo to Excel","url":"https://phototoexcel.info"},
+          {"@type":"ListItem","position":6,"name":"Merge Two Photos","url":"https://mergetwophotos.info"},
+          {"@type":"ListItem","position":7,"name":"Is This AI Image","url":"https://isthisaiimage.info"},
+          {"@type":"ListItem","position":8,"name":"AI Image Expander","url":"https://aiimageexpander.info"},
+          {"@type":"ListItem","position":9,"name":"AI for Image Generation","url":"https://aiforimagegeneration.com"},
+          {"@type":"ListItem","position":10,"name":"AI Image Remover","url":"https://ai-image-remover.com"},
+          {"@type":"ListItem","position":11,"name":"Best AI to Generate Images","url":"https://bestaitogenerateimages.com"},
+          {"@type":"ListItem","position":12,"name":"Image to Image AI","url":"https://imagetoimageai.live"},
+          {"@type":"ListItem","position":13,"name":"AI Image Cleaner","url":"https://ai-image-cleaner.com"}
+        ]
+      }
+    </script>
+  </head>
+  <body>
+    <div class="brand-rail" aria-hidden="true"></div>
+    <div class="site">
+      <header class="site-header">
+        <h1>Majorpart</h1>
+        <div class="lede">
+          <p>涓€浠藉畨闈欑殑 AI 鍥惧儚宸ュ叿鏀惰棌锛屾寜鐢ㄩ€旀寫閫夛紝渚涙煡闃呬笌璺宠浆銆?/p>
+          <p class="en">A quiet collection of AI image tools 鈥?curated for reference and discovery.</p>
+        </div>
+      </header>
+
+      <main>
+        <section class="recommendations" id="recommendations" aria-label="鎺ㄨ崘缃戠珯 / Recommended sites">
+
+          <article class="recommendation" id="yevideo">
+            <h2 class="site-name"><a href="https://yevideo.io" target="_blank" rel="noopener noreferrer">YeVideo</a></h2>
+            <p class="domain">yevideo.io</p>
+            <p class="desc-zh">闈㈠悜鐭棰戜笌鍔ㄦ€佺敾闈㈢殑 AI 杈呭姪鍒涗綔绔欑偣锛岄€傚悎蹇€熺敓鎴愭垨澶勭悊瑙嗛鐩稿叧绱犳潗銆?/p>
+            <p class="desc-en">An AI-assisted site for short-form and motion-oriented creative work, useful for generating or processing video-related assets quickly.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">瑙嗛</li>
+              <li class="tag">AI鍒涗綔</li>
+              <li class="tag">鍔ㄦ€佺敾闈?/li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Video</li>
+              <li class="tag">AI Creation</li>
+              <li class="tag">Motion</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">褰撲綘闇€瑕佹妸銆屽浘鍍忓伐浣滄祦銆嶅欢浼稿埌瑙嗛渚ф椂锛岃繖鏄竻鍗曢噷鏄庣‘鎸囧悜鍔ㄦ€佸唴瀹圭殑鍏ュ彛銆?/p>
+            <p class="reason-en">A clear entry point when your image workflow needs to extend into motion and short video.</p>
+            <a class="visit" href="https://yevideo.io" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="kirkify">
+            <h2 class="site-name"><a href="https://kirkify.info" target="_blank" rel="noopener noreferrer">Kirkify</a></h2>
+            <p class="domain">kirkify.info</p>
+            <p class="desc-zh">杞婚噺鐨勫浘鍍忕帺娉曚笌瓒ｅ懗鐢熸垚宸ュ叿绔欙紝寮鸿皟蹇€熻瘯鐜╀笌鍒嗕韩鍚戠殑瑙嗚鏁堟灉銆?/p>
+            <p class="desc-en">A lightweight playground for playful image generation and shareable visual effects.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">瓒ｅ懗鐢熸垚</li>
+              <li class="tag">鍥惧儚鐜╂硶</li>
+              <li class="tag">杞婚噺宸ュ叿</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Playful</li>
+              <li class="tag">Image Effects</li>
+              <li class="tag">Lightweight</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">閫傚悎鐏垫劅璇曟按锛氭墦寮€灏辫兘璇曪紝涓嶉渶瑕佹矇閲嶇殑瀛︿範鎴愭湰銆?/p>
+            <p class="reason-en">Good for quick inspiration 鈥?try ideas without a heavy learning curve.</p>
+            <a class="visit" href="https://kirkify.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="memepicture">
+            <h2 class="site-name"><a href="https://memepicture.info" target="_blank" rel="noopener noreferrer">Meme Picture</a></h2>
+            <p class="domain">memepicture.info</p>
+            <p class="desc-zh">鍥寸粫姊楀浘涓庤〃鎯呭寘鍦烘櫙鐨勫浘鐗囧伐鍏凤紝甯姪鎶婃兂娉曞揩閫熷仛鎴愬彲浼犳挱鐨勭敾闈€?/p>
+            <p class="desc-en">Image tools oriented around memes and reaction images, helping turn ideas into shareable frames.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">姊楀浘</li>
+              <li class="tag">琛ㄦ儏鍖?/li>
+              <li class="tag">绀句氦浼犳挱</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Memes</li>
+              <li class="tag">Reactions</li>
+              <li class="tag">Social</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">鍐呭浼犳挱鍦烘櫙閲岋紝姊楀浘寰€寰€姣斻€岀簿淇ぇ鍥俱€嶆洿鍒氶渶锛涜繖涓珯鐐瑰鍑嗕簡杩欎竴鐢ㄩ€斻€?/p>
+            <p class="reason-en">In social distribution, meme frames often matter more than heavy retouching 鈥?this site targets that need.</p>
+            <a class="visit" href="https://memepicture.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="pictureenhancer">
+            <h2 class="site-name"><a href="https://pictureenhancer.info" target="_blank" rel="noopener noreferrer">Picture Enhancer</a></h2>
+            <p class="domain">pictureenhancer.info</p>
+            <p class="desc-zh">鑱氱劍鐓х墖涓庢彃鐢荤殑鐢昏川澧炲己锛氭竻鏅板害銆佽鎰熶笌缁嗚妭琛ㄧ幇鐨勪竴绔欏紡澧炲己鍏ュ彛銆?/p>
+            <p class="desc-en">Focused on enhancing photos and illustrations 鈥?sharpness, look, and detail in one place.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鐢昏川澧炲己</li>
+              <li class="tag">娓呮櫚搴?/li>
+              <li class="tag">淇浘杈呭姪</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Enhancement</li>
+              <li class="tag">Clarity</li>
+              <li class="tag">Retouch Assist</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">绱犳潗鍋忕硦鎴栧亸骞崇殑鏃跺€欙紝鍏堝寮哄啀杩涘叆鍚庣画鍒涗綔锛屽線寰€鏇寸渷浜嬨€?/p>
+            <p class="reason-en">When assets look soft or flat, enhancing first usually saves time downstream.</p>
+            <a class="visit" href="https://pictureenhancer.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="phototoexcel">
+            <h2 class="site-name"><a href="https://phototoexcel.info" target="_blank" rel="noopener noreferrer">Photo to Excel</a></h2>
+            <p class="domain">phototoexcel.info</p>
+            <p class="desc-zh">鎶婅〃鏍肩収鐗囨垨鎴浘涓殑鏁版嵁鎻愬彇鍒?Excel锛屽噺灏戞墜宸ュ綍鍏ャ€?/p>
+            <p class="desc-en">Extracts tabular data from photos or screenshots into Excel to reduce manual entry.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">OCR</li>
+              <li class="tag">琛ㄦ牸鎻愬彇</li>
+              <li class="tag">Excel</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">OCR</li>
+              <li class="tag">Tables</li>
+              <li class="tag">Excel</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">鍥惧儚宸ュ叿娓呭崟閲屽皯瑙佸嵈寰堝疄鐢ㄧ殑銆屼粠鍥剧墖鍒拌〃鏍笺€嶈兘鍔涳紝鍊煎緱鍗曠嫭鏀惰棌銆?/p>
+            <p class="reason-en">A rare but practical photo-to-spreadsheet capability worth keeping in a curated list.</p>
+            <a class="visit" href="https://phototoexcel.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="mergetwophotos">
+            <h2 class="site-name"><a href="https://mergetwophotos.info" target="_blank" rel="noopener noreferrer">Merge Two Photos</a></h2>
+            <p class="domain">mergetwophotos.info</p>
+            <p class="desc-zh">灏嗕袱寮犵収鐗囧悎鎴愬埌鍚屼竴鐢婚潰锛岄€傚悎瀵规瘮銆佹嫾璐翠笌绠€鍗曞悎鎴愰渶姹傘€?/p>
+            <p class="desc-en">Combines two photos into one frame for comparisons, collages, and simple composites.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鐓х墖鍚堟垚</li>
+              <li class="tag">鎷艰创</li>
+              <li class="tag">瀵规瘮鍥?/li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Merge</li>
+              <li class="tag">Collage</li>
+              <li class="tag">Comparison</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">寰堝灞曠ず鍦烘櫙鍙渶瑕併€屼袱鍥惧悎涓€銆嶏紝涓嶅繀涓婂畬鏁村浘灞傜紪杈戝櫒銆?/p>
+            <p class="reason-en">Many presentation needs are just "two images, one frame" 鈥?no full editor required.</p>
+            <a class="visit" href="https://mergetwophotos.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="isthisaiimage">
+            <h2 class="site-name"><a href="https://isthisaiimage.info" target="_blank" rel="noopener noreferrer">Is This AI Image</a></h2>
+            <p class="domain">isthisaiimage.info</p>
+            <p class="desc-zh">鍗忓姪鍒ゆ柇鍥惧儚鏄惁鍙兘鐢?AI 鐢熸垚锛岀敤浜庡唴瀹瑰鏍搞€佹眰鐪熶笌绱犳潗绛涙煡銆?/p>
+            <p class="desc-en">Helps assess whether an image may be AI-generated 鈥?useful for review, verification, and screening.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">AI妫€娴?/li>
+              <li class="tag">鐪熶吉鍒ゆ柇</li>
+              <li class="tag">鍐呭瀹℃牳</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">AI Detection</li>
+              <li class="tag">Verification</li>
+              <li class="tag">Moderation</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">鐢熸垚宸ュ叿瓒婃潵瓒婂鏃讹紝銆岃瘑鍒€嶄笌銆岀敓鎴愩€嶅悓鏍烽噸瑕侊紱姝ょ珯琛ヤ笂妫€娴嬩晶鑳藉姏銆?/p>
+            <p class="reason-en">As generators multiply, detection matters as much as creation 鈥?this covers the verification side.</p>
+            <a class="visit" href="https://isthisaiimage.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="aiimageexpander">
+            <h2 class="site-name"><a href="https://aiimageexpander.info" target="_blank" rel="noopener noreferrer">AI Image Expander</a></h2>
+            <p class="domain">aiimageexpander.info</p>
+            <p class="desc-zh">鐢?AI 鍚戝鎵╁睍鐢婚潰杈圭晫锛岄€傚悎琛ュ叏鏋勫浘銆佹敼姣斾緥涓庡仛鍑烘洿瀹界殑瑙嗚鍦烘櫙銆?/p>
+            <p class="desc-en">Expands image boundaries with AI 鈥?useful for reframing, aspect changes, and wider scenes.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鎵╁浘</li>
+              <li class="tag">鏋勫浘琛ュ叏</li>
+              <li class="tag">姣斾緥璋冩暣</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Outpainting</li>
+              <li class="tag">Reframe</li>
+              <li class="tag">Aspect Ratio</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">鍘熷浘鏋勫浘涓嶅鐢ㄦ椂锛屾墿鍥惧線寰€姣旈噸鎷嶆垨閲嶇粯鏇寸洿鎺ャ€?/p>
+            <p class="reason-en">When framing is too tight, expansion is often faster than reshooting or redrawing.</p>
+            <a class="visit" href="https://aiimageexpander.info" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="aiforimagegeneration">
+            <h2 class="site-name"><a href="https://aiforimagegeneration.com" target="_blank" rel="noopener noreferrer">AI for Image Generation</a></h2>
+            <p class="domain">aiforimagegeneration.com</p>
+            <p class="desc-zh">闈㈠悜鏂囩敓鍥句笌閫氱敤 AI 鍥惧儚鐢熸垚鐨勫叆鍙ｇ珯锛岄€傚悎浠庢彁绀鸿瘝鍑哄彂鍒涘缓鏂扮敾闈€?/p>
+            <p class="desc-en">An entry point for text-to-image and general AI image generation from prompts.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鏂囩敓鍥?/li>
+              <li class="tag">鎻愮ず璇?/li>
+              <li class="tag">鍥惧儚鐢熸垚</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Text-to-Image</li>
+              <li class="tag">Prompts</li>
+              <li class="tag">Generation</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">娓呭崟闇€瑕佷竴涓槑纭殑銆屼粠闆剁敓鎴愩€嶄富鍏ュ彛锛屾绔欐壙鎷呰瑙掕壊銆?/p>
+            <p class="reason-en">The list needs a clear "generate from scratch" hub 鈥?this site fills that role.</p>
+            <a class="visit" href="https://aiforimagegeneration.com" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="ai-image-remover">
+            <h2 class="site-name"><a href="https://ai-image-remover.com" target="_blank" rel="noopener noreferrer">AI Image Remover</a></h2>
+            <p class="domain">ai-image-remover.com</p>
+            <p class="desc-zh">绉婚櫎鐢婚潰涓殑澶氫綑鐗╀綋銆佷汉鐗╂垨骞叉壈鍏冪礌锛岃涓讳綋鏇村共鍑€銆?/p>
+            <p class="desc-en">Removes unwanted objects, people, or distractions so the subject stays clean.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鐗╀綋绉婚櫎</li>
+              <li class="tag">鐢婚潰娓呯悊</li>
+              <li class="tag">淇浘</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Object Removal</li>
+              <li class="tag">Cleanup</li>
+              <li class="tag">Retouch</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">瀹炴媿涓庡悎鎴愬浘閮藉父鏈夈€屽浣欏厓绱犮€嶏紱涓撶敤绉婚櫎宸ュ叿姣旈€氱敤缂栬緫鏇磋仛鐒︺€?/p>
+            <p class="reason-en">Photos and composites often carry clutter 鈥?a dedicated remover stays more focused than a general editor.</p>
+            <a class="visit" href="https://ai-image-remover.com" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="bestaitogenerateimages">
+            <h2 class="site-name"><a href="https://bestaitogenerateimages.com" target="_blank" rel="noopener noreferrer">Best AI to Generate Images</a></h2>
+            <p class="domain">bestaitogenerateimages.com</p>
+            <p class="desc-zh">姹囨€讳笌瀵艰銆岄€傚悎鐢熸垚鍥惧儚鐨?AI銆嶉€夋嫨锛屽府鍔╂瘮杈冧笉鍚岀敓鎴愯矾寰勩€?/p>
+            <p class="desc-en">A guide-style hub for choosing AI image generators and comparing generation paths.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">閫夊瀷瀵艰</li>
+              <li class="tag">鐢熸垚宸ュ叿</li>
+              <li class="tag">瀵规瘮鍙傝€?/li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Guide</li>
+              <li class="tag">Generators</li>
+              <li class="tag">Comparison</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">褰撲綘杩樻病鍐冲畾鐢ㄥ摢鏉＄敓鎴愯矾绾挎椂锛屽厛鐪嬪瑙堢珯鑳藉噺灏戠洸鐩瘯閿欍€?/p>
+            <p class="reason-en">When you have not picked a generation path yet, a guide hub reduces blind trial-and-error.</p>
+            <a class="visit" href="https://bestaitogenerateimages.com" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="imagetoimageai">
+            <h2 class="site-name"><a href="https://imagetoimageai.live" target="_blank" rel="noopener noreferrer">Image to Image AI</a></h2>
+            <p class="domain">imagetoimageai.live</p>
+            <p class="desc-zh">浠ョ幇鏈夊浘鐗囦负璧风偣鍋氬浘鐢熷浘鍙樻崲锛屼繚鐣欑粨鏋勭殑鍚屾椂鎺㈢储鏂伴鏍间笌鍙樹綋銆?/p>
+            <p class="desc-en">Image-to-image transformation from an existing photo 鈥?new styles and variants while keeping structure.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鍥剧敓鍥?/li>
+              <li class="tag">椋庢牸鍙樻崲</li>
+              <li class="tag">鍙樹綋</li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Image-to-Image</li>
+              <li class="tag">Style Transfer</li>
+              <li class="tag">Variants</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">宸叉湁鍙傝€冨浘鏃讹紝鍥剧敓鍥鹃€氬父姣旂函鏂囩敓鍥炬洿鍙帶銆?/p>
+            <p class="reason-en">With a reference image in hand, img2img is usually more controllable than text-only generation.</p>
+            <a class="visit" href="https://imagetoimageai.live" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+          <article class="recommendation" id="ai-image-cleaner">
+            <h2 class="site-name"><a href="https://ai-image-cleaner.com" target="_blank" rel="noopener noreferrer">AI Image Cleaner</a></h2>
+            <p class="domain">ai-image-cleaner.com</p>
+            <p class="desc-zh">娓呯悊鍣偣銆佺憰鐤典笌鐢婚潰鏉傝川锛岃鍥惧儚鏇村共鍑€銆佹洿閫傚悎鍚庣画浣跨敤鎴栧彂甯冦€?/p>
+            <p class="desc-en">Cleans noise, blemishes, and visual clutter so images are ready for reuse or publishing.</p>
+            <ul class="tags" aria-label="涓枃鏍囩">
+              <li class="tag">鍥惧儚娓呯悊</li>
+              <li class="tag">鍘荤憰鐤?/li>
+              <li class="tag">鍙戝竷鍓嶅鐞?/li>
+            </ul>
+            <ul class="tags en" aria-label="English tags">
+              <li class="tag">Cleanup</li>
+              <li class="tag">Denoise</li>
+              <li class="tag">Pre-publish</li>
+            </ul>
+            <span class="reason-label">鎺ㄨ崘鐞嗙敱 / Why</span>
+            <p class="reason-zh">鍜屻€岀Щ闄ょ墿浣撱€嶄簰琛ワ細鏇村亸鏁翠綋娲佸噣涓庤鎰熸暣鐞嗭紝閫傚悎浣滀负鍙戝竷鍓嶆渶鍚庝竴姝ャ€?/p>
+            <p class="reason-en">Complements object removal with overall cleanup 鈥?a practical last step before publishing.</p>
+            <a class="visit" href="https://ai-image-cleaner.com" target="_blank" rel="noopener noreferrer">璁块棶缃戠珯 / Visit</a>
+          </article>
+        </section>
+      </main>
+
+      <footer class="site-footer">
+        <p>Majorpart 路 涓汉鏀惰棌鎺ㄨ崘椤?/p>
+        <p>Personal curation 路 No backend 路 Static on GitHub Pages</p>
+      </footer>
+    </div>
+    <script src="reveal.js" defer></script>
+  </body>
+</html>
diff --git a/reveal.js b/reveal.js
new file mode 100644
index 0000000..b8488c9
--- /dev/null
+++ b/reveal.js
@@ -0,0 +1,73 @@
+(function () {
+  var nodes = document.querySelectorAll(".recommendation");
+  if (!nodes.length) return;
+
+  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
+    nodes.forEach(function (node) {
+      node.classList.add("is-visible");
+    });
+    return;
+  }
+
+  if (!("IntersectionObserver" in window)) {
+    nodes.forEach(function (node) {
+      node.classList.add("is-visible");
+    });
+    return;
+  }
+
+  var observer = new IntersectionObserver(
+    function (entries) {
+      entries.forEach(function (entry) {
+        if (entry.isIntersecting) {
+          entry.target.classList.add("is-visible");
+          observer.unobserve(entry.target);
+        }
+      });
+    },
+    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
+  );
+
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
+  nodes.forEach(function (node) {
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
+  });
+  setTimeout(markVisibleInViewport, 0);
+})();
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
diff --git a/styles.css b/styles.css
new file mode 100644
index 0000000..f568d5e
--- /dev/null
+++ b/styles.css
@@ -0,0 +1,269 @@
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
+}
+
+html.js .recommendation {
+  transition: opacity 0.7s ease, transform 0.7s ease;
+}
+
+html.js .recommendation:not(.is-visible) {
+  opacity: 0;
+  transform: translateY(0.6rem);
+}
+
+html.js .recommendation.is-visible {
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
+
+  html.js .recommendation:not(.is-visible) {
+    opacity: 1;
+    transform: none;
+  }
+}
