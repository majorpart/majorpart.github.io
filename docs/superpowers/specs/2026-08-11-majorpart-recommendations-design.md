# Majorpart 推荐站设计规格

**日期：** 2026-08-11  
**状态：** 已批准  
**仓库：** `majorpart/majorpart.github.io`  
**线上地址：** `https://majorpart.github.io/`

## 1. 目标

做一个个人收藏式的网站推荐页，展示一组 AI 图像相关工具。页面为纯静态前端，无后端；推送到 GitHub Pages 后即可访问。全部可见文案写在 HTML 源码中，便于 Google 等搜索引擎直接抓取。

## 2. 约束与成功标准

| 约束 | 说明 |
|------|------|
| 无后端 | 不依赖服务器、API、数据库 |
| 无构建链 | 本地打开或 GitHub Pages 直接托管即可 |
| SEO | 正文不由 JS 注入；爬虫读取 HTML 即可获得名称、介绍、标签、推荐理由 |
| 布局 | 竖向列表；不使用卡片（无边框盒、阴影、圆角容器） |
| 语言 | 中英文同时展示 |
| 文案 | 由实现阶段直接撰写完整中英文内容 |
| 品牌 | 页头主品牌为 **Majorpart** |

**成功标准：**

1. 访问 `https://majorpart.github.io/` 可打开完整页面  
2. 查看网页源代码可看到全部站点文案与外链  
3. 点击站点名称或「访问」链接可在新标签打开对应网站  
4. 桌面与手机均可正常阅读  
5. 视觉符合「苔色书签」方向（淡绿、小众精致）

## 3. 技术方案

采用 **纯静态 HTML + CSS**（可选极少量 JS 仅用于动效，不负责内容渲染）。

不采用 SPA（React/Vue 客户端渲染）或需要构建的 SSG，以免增加部署复杂度或削弱默认可抓取性。

## 4. 信息架构

单页自上而下：

1. **页头** — 品牌 `Majorpart` + 一句中英双语说明（收藏 / 推荐 AI 图像工具）  
2. **推荐列表** — 13 个站点竖向排列，细分隔线区分  
3. **页脚** — 简短版权或说明  

### 4.1 每个站点条目字段

| 字段 | 要求 |
|------|------|
| 名称 | 可点击，外链到站点 |
| 中文介绍 | 1–3 句 |
| 英文介绍 | 1–3 句 |
| 中文标签 | 若干短标签 |
| 英文标签 | 若干短标签 |
| 中文推荐理由 | 简短说明为何推荐 |
| 英文推荐理由 | 简短说明为何推荐 |
| 访问链接 | 「访问网站 / Visit」文字链，与名称指向同一 URL |

外链规则：完整 `https://` URL；`target="_blank"`；`rel="noopener noreferrer"`。

### 4.2 推荐站点列表（顺序固定）

1. yevideo.io  
2. Kirkify.info  
3. memepicture.info  
4. pictureenhancer.info  
5. phototoexcel.info  
6. mergetwophotos.info  
7. isthisaiimage.info  
8. aiimageexpander.info  
9. aiforimagegeneration.com  
10. ai-image-remover.com  
11. bestaitogenerateimages.com  
12. imagetoimageai.live  
13. ai-image-cleaner.com  

域名书写以列表为准；链接统一补全为 `https://` + 域名（小写规范化）。

## 5. 视觉设计：「苔色书签」

安静、偏编辑感的收藏页，不是工具仪表盘。

### 5.1 色彩

| Token | Hex | 用途 |
|-------|-----|------|
| Mist | `#EEF4EF` | 页面底色（冷雾绿） |
| Soft | `#F7FBF8` | 页头淡渐变 |
| Sage | `#B7CFC0` | 分隔线、弱强调 |
| Moss | `#4F6F5C` | 链接、品牌强调 |
| Ink | `#1C2A22` | 正文 |
| Mute | `#6B7F72` | 英文等次要文字 |

避免：紫系渐变、暖米黄底 + 赤陶强调、报纸多栏密排、卡片堆叠。

### 5.2 字体

- 品牌 / 站点名：Cormorant Garamond（细衬线）  
- 中文正文：Noto Serif SC  
- 标签 / 域名：IBM Plex Sans（小字、略宽字距）  

通过 Google Fonts 或等价 CDN 引入；需保证中英混排可读。

### 5.3 布局

- 单栏居中，内容宽约 640–720px  
- 条目之间极细苔色分隔线  
- 无边框、无阴影、无圆角卡片容器  
- 中文在上，英文在下、字号略小、颜色用 Mute  
- 站点名可点；文末「访问网站 / Visit」  

### 5.4 签名与动效

- 页头左侧竖向苔色细线；可有轻微透明度呼吸（须尊重 `prefers-reduced-motion`）  
- 动效限 2–3 处：页头品牌淡入、列表条目滚动显现、链接悬停下划线展开  

## 6. 文件结构

```
majorpart.github.io/
├── index.html
├── styles.css
├── robots.txt
├── sitemap.xml
└── docs/superpowers/specs/...
```

- `index.html`：全部可见内容 + SEO meta；正文不依赖 JS  
- `styles.css`：样式与动效  
- `robots.txt`：允许抓取  
- `sitemap.xml`：指向站点首页  

## 7. SEO

- `<title>` 与 `meta name="description"`（中英要点均可写入 description）  
- `lang="zh-CN"`  
- 语义结构：`header` / `main` / `article`（每站点一条） / `h1`（品牌） / `h2`（站点名）  
- 真实锚点外链（见 4.1）  
- 包含 `JSON-LD` `ItemList`，描述推荐列表（写在 HTML 内，不依赖额外请求）  

## 8. 部署

1. 内容提交到 `main`  
2. GitHub → Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)`  
3. 等待发布后访问 `https://majorpart.github.io/`  

本地验收：用浏览器直接打开 `index.html`，或用任意静态文件服务器。

## 9. 明确不做

- 搜索、筛选、分页  
- 登录、评论、后台 CMS  
- 分析脚本（除非另行要求）  
- SPA / 构建流水线 / 后端服务  

## 10. 实现备注

- 全部中英文介绍、标签、推荐理由在实现时由作者撰写，语气克制、具体，避免空泛营销套话  
- 实现前另写实施计划（writing-plans），再编码  
