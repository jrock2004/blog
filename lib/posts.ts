import fs from 'fs';
import path from 'path';
import typedMatter from './matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type IPostData = {
  title: string;
  date: string;
  image?: string;
  tags: string[];
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
  const fullPath = path.join(postsDirectory, id, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = typedMatter<IPostData>(fileContents);
  const content = matterResult.content;
  const excerptDefault = content.slice(0, 200);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = await processedContent.toString();

  // from contentHtml, pull out all the code blocks and add them to the code block component
  const codeBlocks = contentHtml.match(/<pre><code[\s\S]*?<\/code><\/pre>/g);

  return {
    excerpt: matterResult.excerpt !== '' ? matterResult.excerpt : excerptDefault,
    content: contentHtml,
    id,
    hasCodeBlocks: codeBlocks !== null && codeBlocks.length > 0,
    ...matterResult.data,
  };
}
