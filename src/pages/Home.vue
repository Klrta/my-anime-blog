<template>
  <div class="max-w-3xl mx-auto mt-8 space-y-6">
    <input type="text" v-model="keyword" placeholder="请输入关键词....." class="search-input">
    <PostCard v-for="post in filterPosts" :key="post.id" :post="post"></PostCard>
    <router-link to="/tags" class="tags">查看所有标签</router-link>
  </div>
</template>

<script setup>
import PostCard from '../components/PostCard.vue'
import { posts} from '../data/posts.js'
import { ref, computed } from 'vue'

const keyword = ref('');

const filterPosts = computed(()=>{
  if(!keyword.value.trim()) {
    return posts; // 如果没有关键词，返回所有文章
  }
  const k = keyword.value.trim().toLowerCase();
  return posts.filter(post=> {
    return post.title.includes(k) ||
           post.summary?.includes(k) ||
           post.tags.join(',').includes(k);
  })
})
</script>

<style>
  .tags {
    text-decoration: none;
  }

  input {
    display: block;
    width: 60%;
    margin: 20px auto;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
}
</style>
