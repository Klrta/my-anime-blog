
# 2025-06-20 二次元博客开发日记

## 📁 路径问题的踩坑总结

起初我把 `posts/1.md` 放在了 `src/posts/`，一直以为 fetch 以 `src` 为根目录，结果一直 404。后来才发现：

> ✅ **fetch 请求是以 `public/` 为根目录的！**

所以正确路径应该是 `public/posts/1.md`，请求路径是 `/posts/1.md` 才对。

---

## 🧱 Markdown 元信息解析：gray-matter ➡ front-matter

最初我尝试使用 `gray-matter` 来解析 YAML Front Matter，但遇到 `Buffer is not defined` 的报错，发现它依赖了 Node 模块，而浏览器环境没有这个模块。

> ✅ 解决办法：我换用了更轻量的 `front-matter`，不依赖 Node，适合前端环境。

解析代码核心如下：

```js
import fm from 'front-matter'
const { attributes: data, body: content } = fm(mdRaw)
postMeta.value = data
htmlContent.value = marked.parse(content)
```

---

## 📖 YAML Front Matter 的使用理解

虽然我还没完全搞懂 YAML 的结构，但我知道：

- 它写在 `.md` 文件最上方 `---` 包起来的部分
- 会自动被 `front-matter` 解析成一个对象
- 可以直接传给 `postMeta.value = data` 来使用

```md
---
title: 我的第一篇博客
date: 2025-06-19
tags: [Vue, 二次元, 日常]
cover: /images/cover1.jpg
---
```

---

## 🗂 Vue3 文件结构理解

我基本掌握了 Vue 项目的文件组织：

- `components/`：复用型组件（如文章卡片）
- `pages/`：页面视图（Home.vue / PostDetail.vue）
- `router/`：路由表配置
- `assets/`：静态资源
- `App.vue`：应用主入口，绑定 `<router-view>`

路由跳转理解为：点击某个页面 → 进入路由表 → 匹配对应的页面组件

---

## 📝 Markdown 渲染

使用 `marked` 来把正文 Markdown 渲染为 HTML：

- `npm install marked`
- 使用 `marked.parse(content)` 来渲染 Markdown

我虽然不熟 Markdown 规范，但现在知道：**标题、段落、列表等都能显示出来！**

---

## 🔍 debug 思维

今天主要靠 ChatGPT 给的提示解决问题，自己没有主动 console.log 或断点调试。以后要强化自己独立查错能力。

---

## ✅ 今日小总结

虽然我绕了点路，但：

- 搭建了基本 Vue3 博客系统
- 能通过 `.md` 管理每篇文章
- 页面实现了标题、封面、标签、内容的完整展示
- 加深了对 fetch、模块导入、目录结构、路由跳转的理解

> 明天要继续冲分类、评论和 GitHub Pages 部署！

---
