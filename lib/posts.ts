import fs from 'fs';
import path from 'path';
import typedMatter from './matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface IPost {
  prevId: string;
  prevTitle: string;
  nextId: string;
  nextTitle: string;
  hasCodeBlocks: boolean;
  excerpt?: string;
  content: string;
  id: string;
  title: string;
  image?: string;
  date: string;
  tags: Array<string>;
}

export type IMatterPost = {
  excerpt?: string;
  content: string;
  id: string;
  title: string;
  image?: string;
  date: string;
  tags: Array<string>;
};

export type IPostData = {
  title: string;
  date: string;
  image?: string;
  tags: Array<string>;
};

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(async (fileName) => {
    const id = fileName;

    const fullPath = path.join(postsDirectory, fileName, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = typedMatter<IPostData>(fileContents);
    const content = matterResult.content;
    const excerptDefault = content.slice(0, 200);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = await processedContent.toString();

    return {
      excerpt: matterResult.excerpt !== '' ? matterResult.excerpt : excerptDefault,
      content: contentHtml,
      id,
      ...matterResult.data,
    };
  });

  const response = await Promise.all(allPostsData);

  return response.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPostData(id: string) {
  const allPostsData = await getSortedPostsData();
  const allPosts = allPostsData as IMatterPost[];

  const current: IMatterPost = allPosts.find((post) => post.id === id) || {
    content: '',
    date: '',
    id: '',
    title: '',
    tags: [],
  };
  let prevId = '';
  let prevTitle = '';
  let nextId = '';
  let nextTitle = '';

  if (current) {
    prevId = allPosts[allPosts.indexOf(current) - 1]?.id || allPosts[allPosts.length - 1]?.id;
    prevTitle =
      allPosts[allPosts.indexOf(current) - 1]?.title || allPosts[allPosts.length - 1]?.title;
    nextId = allPosts[allPosts.indexOf(current) + 1]?.id || allPosts[0]?.id;
    nextTitle = allPosts[allPosts.indexOf(current) + 1]?.title || allPosts[0]?.title;
  }

  const codeBlocks = current?.content.match(/<pre><code[\s\S]*?<\/code><\/pre>/g);

  return {
    prevId,
    prevTitle,
    nextId,
    nextTitle,
    hasCodeBlocks: codeBlocks !== null && codeBlocks !== undefined && codeBlocks.length > 0,
    ...current,
  };
}
