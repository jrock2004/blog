import { ReactNode } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import developerCode from '@/assets/images/developer-code.jpg';
import Link from 'next/link';
import { IPost } from '@/lib/posts';

export default function Post({
  children,
  blogImage,
  imgAlt = '',
  imgSrc,
  post,
  showPostNavigation,
}: PostProps) {
  const { nextId, nextTitle, prevId, prevTitle, title } = post;
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

  const linkClasses = `inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-muted-1 bg-transparent px-3 py-2 text-xs font-semibold text-text shadow-sm hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80`;

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
        <div className="mt-20 flex justify-between">
          {prevId ? (
            <Link href={`/blog/${prevId}`} className={linkClasses}>
              <ChevronLeftIcon className="mr-1 h-4 w-4" />
              {prevTitle}
            </Link>
          ) : (
            <div></div>
          )}
          {nextId ? (
            <Link href={`/blog/${nextId}`} className={linkClasses}>
              {nextTitle}
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          ) : (
            <div></div>
          )}
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
  post: Partial<IPost>;
  showPostNavigation?: boolean;
}
