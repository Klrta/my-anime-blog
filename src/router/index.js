import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PostDetail from '../pages/PostDetail.vue'
import TagPage from '../pages/TagPage.vue'
import TagList from '../pages/TagList.vue'


const routes = [
  { path: '/', component: Home },
  // { path: '/post/:id', component: PostDetail }, 
  { path: '/post/:slug', component: PostDetail },
  { path: '/tag/:tag', component: TagPage},
  { path: '/tags', component: TagList},
  { path: '/archive', component: () => import('../pages/Archive.vue') },
  { path: '/search', component: () => import('../pages/Search.vue')}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
