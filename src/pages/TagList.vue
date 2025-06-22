<template>
 <div class="tag-list-container">
    <div>
        <h1 class="title">所有标签(共{{ tags.length }}个)</h1>
    </div>

    <div class="tag-grid">
        <router-link
            v-for="tag in tags"
            :key="tag"
            :to="`/tag/${encodeURIComponent(tag)}`"
            class="tag-item">
         {{ tag }}
        </router-link>
    </div>
 </div>
</template>

<script setup lang ="ts">
import { posts } from '../data/posts'

// 提取所有 tags（去重）
const tagSet = new Set();
posts.forEach(post=> {
    post.tags.forEach(tag => {
        tagSet.add(tag);
    })
})
const tags = [...tagSet].sort();

</script>

<style>
.tag-list-container {
    max-width: 720px;
    margin: 40px auto;
    text-align: center;
}

.title {
    font-size: 24px;
    margin-bottom: 24px;
    color: #c9184a;
    font-weight: 900;
}

.tag-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

.tag-item {
    background: #f5f5f5;
    padding: 8px 12px;
    border-radius: 20px;
    color: #555;
    text-decoration: none;
    transition: 0.2s;
}

.tag-item:hover {
    background: #c9184a;
    color: white;
}
</style>