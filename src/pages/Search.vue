<template>
    <div class="search-page">
        <input v-model="keyword" placeholder="输入关键词" />
        <div v-if="filterPosts.length">
            <PostCard v-for="post in filterPosts" :key="post.id" :post="post"></PostCard>
        </div>
        <div v-else>
            <p class="no-result">文章はない</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import PostCard from '../components/PostCard.vue';
import { posts } from '../data/posts.js';

const keyword = ref('');

const filterPosts = computed(() => {
    if(!keyword.value.trim()) {
        return [];
    }
    const k = keyword.value.trim().toLowerCase();
    return posts.filter(post => {
        return  post.title.includes(k) ||
                post.summary?.includes(k) ||
                post.tags.join(',').includes(k)
    })
})
</script>

<style>
input {
    display: block;
    width: 60%;
    margin: 20px auto;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
}

.no-result {
    color: #999;
    text-align: center;
    margin-top: 40px;
    font-style: italic;
}
</style>