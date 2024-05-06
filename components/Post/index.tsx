import { ReactNode } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

import developerCode from '@/assets/images/developer-code.jpg';

export default function Post({ children, blogImage, imgAlt = '', imgSrc, title }: PostProps) {
  const showImage = imgSrc || blogImage;
  let src = '';
  const imageProps: Partial<ImageProps> = {
    className: 'aspect-video w-full rounded-xl shadow-lg',
    src: '',
    quality: 100,
  };

  if (blogImage) {
    imageProps.src = `/images/blog/${blogImage}`;
    imageProps.width = '300';
    imageProps.height = '200';
  }

  if (imgSrc) {
    imageProps.src = imgSrc;
  }

  return (
    <div>
      {showImage && (
        <Image
          className="aspect-video w-full rounded-xl shadow-lg"
          alt={imgAlt}
          src={src}
          {...imageProps}
        />
      )}
      <h2 className="mt-6 text-xl font-semibold text-heading sm:mt-8 sm:text-2xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base font-medium text-text sm:mt-6 lg:text-lg">{children}</p>
    </div>
  );
}

export interface PostProps {
  blogImage?: string;
  children: ReactNode;
  imgAlt?: string;
  imgSrc?: StaticImageData;
  title: string;
}
