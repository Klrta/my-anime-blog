import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PostDetail from '../pages/PostDetail.vue'


const routes = [
  { path: '/', component: Home },
  // { path: '/post/:id', component: PostDetail }, 
  { path: '/post/:slug', component: PostDetail },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
