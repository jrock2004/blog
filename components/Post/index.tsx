import { ReactNode } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

import developerCode from '@/assets/images/developer-code.jpg';
import Link from 'next/link';

export default function Post({
  children,
  blogImage,
  imgAlt = '',
  imgSrc,
  showPostNavigation = false,
  title,
}: PostProps) {
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
    <article>
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
      <div className="mt-4 text-base font-medium text-text sm:mt-6 lg:text-lg">{children}</div>
      {showPostNavigation && (
        <div className="mt-20">
          <Link
            href="/blog"
            className="hover:border-secondary-accent hover:bg-secondary-accent focus:ring-primary/80 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Go Back
          </Link>
        </div>
      )}
    </article>
  );
}

export interface PostProps {
  blogImage?: string;
  children: ReactNode;
  imgAlt?: string;
  imgSrc?: StaticImageData;
  showPostNavigation?: boolean;
  title: string;
}
