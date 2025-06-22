<template>
    <div class="tag-page">
        <h1>标签:<span class="highlight">{{ tag }}</span></h1>
    </div>
    <div v-if="filteredPosts.length">
        <PostCard v-for="post in filteredPosts" :key="post.id" :post="post"></PostCard>
    </div>
    <div v-else class="no-post">文章はない</div>
    <router-link to="/" class="back-link">← 返回首页</router-link>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard.vue'

const route = useRoute();
const tag = route.params.tag;

const filteredPosts = posts.filter(post => post.tags.includes(tag))
</script>

<style>
.tag-page {
    max-width: 800px;
    margin: 20px auto 20px auto;
    padding: 20px;
}

.highlight {
  color: #e91e63;
  font-weight: bold;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #007acc;
  text-decoration: underline;
}

.no-post {
  color: #999;
  font-style: italic;
  margin-top: 40px;
}
</style>