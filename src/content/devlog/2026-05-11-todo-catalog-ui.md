---
date: 2026-05-11
title: 目录界面风格化与交互优化
type: feature
status: done
priority: high
---

对目录（文章列表）页面进行 P5R 风格视觉改造，包括重新切割 UI 资产、实现分类筛选的交互链接、整体排版对齐设计稿。

## 完成记录

- 重构 `src/pages/posts/index.astro`，迁移到 `BaseLayout` + `SiteNav` 组合布局
- 新增侧边栏（logo + 分类导航图片热区），以 `catalog-sidebar` 为容器
- 文章列表改为卡片横排设计，含食物 icon 封面、ink 边框 SVG 装饰、偏移错排
- 分类筛选支持 URL query 同步 (`pushState` / `popstate`)，无刷新切换
- 标题区域（`catalog-title-panel`）随筛选动态更新 title / eyebrow badge / description
- 新增 hover 音效 (`select.wav`)，改善交互反馈
- `theme.css` 新增约 610 行 `catalog-*` 样式，含完整三档响应式断点（980px / 760px）
- 引入 9 张食物 icon 图片资产（`public/images/icons/food1-9.png`）
