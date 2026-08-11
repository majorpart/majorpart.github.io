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

