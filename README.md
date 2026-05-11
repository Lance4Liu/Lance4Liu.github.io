# P5R Blog (Astro + Markdown)

这个版本将原先的单文件 `static/index.html` 重构为 Astro 静态站，目标是提升可维护性与长期内容管理能力。

## 运行方式

```bash
npm install
npm run dev
npm run build
```

## 当前信息架构

- 首页：`/`
- 文章列表：`/posts`
- 文章详情：`/posts/{category}/{slug}`

其中 `category` 固定为：

- `tech`
- `product`
- `diary`

## 目录结构

- `src/pages`：路由页面
- `src/layouts`：布局组件（`BaseLayout` / `HomeLayout` / `ArticleLayout`）
- `src/content/posts`：Markdown 文章内容
- `src/content/config.ts`：内容 schema（frontmatter 校验）
- `src/styles/theme.css`：全局主题变量与主要样式
- `public/images`：站点图片资源（沿用原命名）

## 发文规范

日常发文采用手动新建 Markdown。

1. 复制根目录 `post-template.md`
2. 放到 `src/content/posts/` 下
3. 修改 frontmatter 与正文
4. 使用固定 slug 规则：仅小写英文+连字符（如 `my-first-post`）

## Frontmatter 约定

必填字段：

- `title` string
- `slug` string（小写英文+连字符）
- `category` enum(`tech` `product` `diary`)
- `date` ISO date（如 `2026-04-23`）
- `summary` string

可选字段：

- `tags` string[]
- `cover` string
- `draft` boolean（默认 false）
- `readingTime` string

## 说明

- v1 只实现 Blog 内容模型，不含 vlog。
- 不使用 React islands，优先保持静态输出与结构简单。
- 首页中的 about/timeline/links/guestbook 目前为轻量区块，后续可继续拆分。
