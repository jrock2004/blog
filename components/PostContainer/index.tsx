import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

export default function PostContainer({ children, imgAlt, imgSrc, title }: PostContainerProps) {
  const showImage = imgSrc;

  return (
    <article>
      {showImage && imgAlt && (
        <Image className="aspect-video w-full rounded-xl shadow-lg" alt={imgAlt} src={imgSrc} />
      )}
      <h2 className="mt-6 text-xl font-semibold text-heading sm:mt-8 sm:text-2xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-4 text-base font-medium text-text sm:mt-6 lg:text-lg">{children}</div>
    </article>
  );
}

export interface PostContainerProps {
  children: ReactNode;
  imgAlt?: string;
  imgSrc?: StaticImageData;
  title: string;
}
