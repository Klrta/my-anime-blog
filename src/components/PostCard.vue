<template>
  <div class="postcontainer">
    <h2 class="text-xl font-bold text-pink-600">{{ post.title }}</h2>
    <p class="text-sm text-gray-400">{{ post.date }}</p>
    <p class="mt-2 text-gray-700">{{ post.summary }}</p>
    <router-link :to="`/post/${post.slug}`" class="text-blue-500 underline">阅读更多</router-link>
    <div class="tags">
      <router-link v-for="tag in post.tags" :key="tag" :to="`/tag/${encodeURIComponent(tag)}`" class="tag">{{ tag }}</router-link>
    </div>
  </div>

</template>

<script setup>
defineProps({
  post: Object
})
</script>

<style>
  .postcontainer {
    border: thick double #32a1ce;
    width: 50%;
    padding: 10px 50px 20px;
    /* 居中 */
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .tags {
  margin-top: 10px;
}
  .tag {
    display: inline-block;
    margin-right: 8px;
    padding: 2px 8px;
    font-size: 12px;
    background-color: #eee;
    color: #555;
    border-radius: 4px;
    text-decoration: none;
  }
  .tag:hover {
    background-color: #c9f2ff;
    color: #007acc;
  }
</style>