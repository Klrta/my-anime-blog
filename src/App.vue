<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav class="navbar">
      <router-link to="/">首页</router-link>
      <router-link to="/tags">标签</router-link>
      <router-link to="/archive">归档</router-link> <!-- ✨ 新增 -->
      <router-link to="/search">搜索</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
.navbar {
  padding: 16px;
  background-color: #fff0f6;
  text-align: center;
}

.navbar a {
  margin: 0 15px;
  color: #c9184a;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
