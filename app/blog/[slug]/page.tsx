import { IMatterPost, getBlogPostData } from '@/lib/posts';
import Post from '@/components/Post';
import { CodeBlocks } from '@/components/CodeBlocks';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostData(params.slug);

  return (
    <section className="blog-post-content">
      <Post imgAlt={post.title} blogImage={post.image} post={post} showPostNavigation={true}>
        {post.hasCodeBlocks ? (
          <CodeBlocks>{post.content}</CodeBlocks>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </Post>
    </section>
  );
}
