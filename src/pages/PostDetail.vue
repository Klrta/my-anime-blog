<template>
    <div class="post-container">
        <img :src="postMeta.cover" class="cover" />
        <h1>{{ postMeta?.title }}</h1>
        <p class="date">{{ postMeta?.date }} | {{ Array.isArray(postMeta.tags) ? postMeta.tags.join(', ') : '' }}</p>
        <div class="content" v-html="htmlContent"></div>
        <!-- <h2>{{ postMeta.cover }} 调试用</h2> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts.js';
import { marked } from 'marked';
import fm from 'front-matter'
import { h, onMounted, ref } from 'vue';

const route = useRoute();
// const id = parseInt(route.params.id);
// const post = posts.find(p=> p.id === id);
const slug = route.params.slug;
const post = posts.find(p => p.slug === slug);

onMounted(async () => {
    const res = await fetch(`/posts/${post.file}`);
    const mdRaw = await res.text();
    const { attributes: data, body: content } = fm(mdRaw)

    postMeta.value = {
    ...post,
    ...data, // 优先覆盖
  }
    htmlContent.value = marked.parse(content);
})

const postMeta = ref({
  title: '',
  date: '',
  tags: [],
  cover: '',
})
// 示例 Markdown 内容（未来你可以从文件或后端加载）
const rawMarkdown = `
## 正文标题

这是正文内容，用 **Markdown** 写的。

- Vue很棒
- Tailwind很萌
- 雌小鬼超棒！♡
`

const htmlContent = ref('')



</script>

<style scoped>
.post-container {
    max-width: 720px;
    margin: 40px auto;
    padding: 20px;
    font-family: "Comic Neue", "幼圆", "Arial", sans-serif;
    line-height: 1.7;
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.post-container h1 {
    font-size: 32px;
    margin-bottom: 20px;
}

.post-container p.date {
    font-size: 14px;
    color: #888;
}

.post-container img.cover {
    width: 30%;
    max-width: 600px;
    height: auto;
    display: block;
    margin: 0 auto 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.post-container .content {
    margin-top: 20px;
}

.post-container .content h2 {
    font-size: 24px;
    margin: 20px 0 10px;
}

.post-container .content ul {
  padding-left: 20px;
}

.post-container .content blockquote {
  border-left: 4px solid #aaa;
  padding-left: 1em;
  color: #666;
  font-style: italic;
}
</style>