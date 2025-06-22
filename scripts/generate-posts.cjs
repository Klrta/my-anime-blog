const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 文章所在目录（根据实际情况调整）
const POSTS_DIRECTORY = path.join(__dirname, '../src/posts');
// 输出文件位置
const OUTPUT_FILE = path.join(__dirname, '../src/data/posts.js');

// 获取文章文件列表
function getPostFiles() {
  return fs.readdirSync(POSTS_DIRECTORY)
    .filter(filename => filename.endsWith('.md'));
}

// 解析文章元数据
function parsePostMetadata(filename) {
  const filePath = path.join(POSTS_DIRECTORY, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  
  // 从文件名或前置元数据中提取 slug
  const slug = data.slug || filename.replace(/\.md$/, '');
  
  return {
    id: data.id || Date.now(), // 如果没有提供 id，则使用时间戳
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    tags: data.tags || [],
    cover: data.cover || '/images/default-cover.jpg',
    file: filename,
  };
}

// 生成 posts.js 文件
function generatePostsFile(posts) {
  const fileContent = `// 此文件由脚本自动生成，请勿手动修改
export const posts = ${JSON.stringify(posts, null, 2)}
`;
  
  fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');
  console.log(`成功生成 posts.js，共 ${posts.length} 篇文章`);
}

// 主函数
function main() {
  try {
    const files = getPostFiles();
    const posts = files.map(parsePostMetadata);
    
    // 按日期降序排序（最新的文章排在前面）
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    generatePostsFile(posts);
  } catch (error) {
    console.error('生成 posts.js 时出错:', error);
    process.exit(1);
  }
}

main();
