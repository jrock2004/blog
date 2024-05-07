import Link from 'next/link';

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
            <Link key={post.id} href={`/blog/${post.id}`} className="block">
              <Post imgAlt={post.title} blogImage={blogImage} post={post}>
                {post.excerpt ? (
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                ) : (
                  post.excerpt
                )}
              </Post>
            </Link>
          );
        })}
      </div>
    </>
  );
}
