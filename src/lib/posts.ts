import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

type MatterResultData = {
  date: string;
  title: string;
};

export async function processPostData(content: string) {
  const processedContent = await remark()
    .use(html)
    .process(content);

  return processedContent.toString();
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as MatterResultData,
      content: matterResult.content
    };
  }));

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  const data = await getSortedPostsData();

  const postData = data.find((d) => d.id === id) ?? null;

  if (postData === null) {
    return null;
  }

  const content = await processPostData(postData?.content);

  return {
    ...postData,
    content,
  };
}
