<template>
  <div class="max-w-3xl mx-auto mt-8 space-y-6">
    <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
  </div>
</template>

<script setup>
import PostCard from '../components/PostCard.vue'
import { posts} from '../data/posts.js'
</script>

