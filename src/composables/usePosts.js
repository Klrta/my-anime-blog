// src/composables/usePosts.js
import { ref, onMounted } from 'vue'
import { loadAllPosts } from '../utils/postLoader.js'

export function usePosts() {
  const posts = ref([])
  onMounted(async () => {
    posts.value = await loadAllPosts()
  })
  return posts
}
