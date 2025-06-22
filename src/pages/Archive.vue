<template>
    <div class="archive-container">
        <h1 class="title">📦 博客归档</h1>
        <div v-for="(items,month) in archiveGroup" :key="month" class="month-block">
            <h2 class="month">{{ month }}({{ items.length }})篇</h2>
            <ul>
                <li v-for="post in items" :key="post.slug" class="post-item">
                    <router-link :to="`/post/${post.slug}`">{{ post.data }} - {{ post.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { posts } from '../data/posts';

const groupByMouth = () => {
    const archiveMap = {}
    posts.forEach(post=> {
        const [year, month] = post.date.split('-');
        const key = `${year}年${month}月`;
        if(!archiveMap[key]){
            archiveMap[key] = [];
        }
        archiveMap[key].push(post);
    })
    return archiveMap;
}

const archiveGroup = groupByMouth();
</script>

<style>
.archive-container {
    max-width: 720px;
    margin: 40px auto;
    padding: 20px;
    font-family: "霞鹜文楷", "微软雅黑", sans-serif;
}

.title {
    font-size: 29px;
    margin-bottom: 24px;
    color: #c9184a;
}

.month-block {
    margin-bottom: 32px;
    border-left: 4px solid #f3a4b5;
    padding-left: 12px;
}

.month {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.post-item {
  padding: 6px 0;
}

.post-item a {
  color: #555;
  text-decoration: none;
}

.post-item a:hover {
    color:rgb(247, 16, 205);
}
</style>