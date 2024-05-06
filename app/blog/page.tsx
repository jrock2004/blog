import Link from 'next/Link';

import { getSortedPostsData } from '@/lib/posts';
import Post from '@/components/Post';

export default async function Blog() {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <h2 className="mt-6 hidden text-xl font-semibold text-heading sm:mt-8 sm:text-2xl lg:text-4xl">
        Blog
      </h2>
      <div className="space-y-12 sm:space-y-24">
        {allPostsData.map((post) => {
          const blogImage = post.image === undefined ? undefined : post.image;

          return (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Post imgAlt={post.title} blogImage={blogImage} title={post.title}>
                {post.excerpt}
              </Post>
            </Link>
          );
        })}
      </div>
    </>
  );
}
