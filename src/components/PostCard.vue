<template>
  <div class="p-4 border rounded-xl shadow-md hover:shadow-xl transition">
    <h2 class="text-xl font-bold text-pink-600">{{ post.title }}</h2>
    <p class="text-sm text-gray-400">{{ post.date }}</p>
    <p class="mt-2 text-gray-700">{{ post.summary }}</p>
    <router-link :to="`/post/${post.slug}`" class="text-blue-500 underline">阅读更多</router-link>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script>