// utils/getAllTags.js
export function getAllTags(posts) {
  const tagSet = new Set();
  posts.forEach(p => p.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
