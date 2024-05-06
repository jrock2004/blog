import { getBlogPostData } from '@/lib/posts';
import Post from '@/components/Post';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostData(params.slug);

  return (
    <section className="blog-post-content">
      <Post imgAlt={post.title} blogImage={post.image} title={post.title}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Post>
    </section>
  );
}
