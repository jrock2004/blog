import developerCode from '@/assets/images/developer-code.jpg';
import PostContainer from '@/components/PostContainer';

export default function Home() {
  return (
    <div>
      <PostContainer
        imgAlt="Developer writing code"
        imgSrc={developerCode}
        title="Hi, I'm John Costanzo"
      >
        A full stack JavaScript developer from the United States. This is the place where I tell you
        about myself, show off some work and blog about my thoughts.
      </PostContainer>
    </div>
  );
}
