import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

import developerCode from '@/assets/images/developer-code.jpg';

export default function Post({ children, imgAlt, imgSrc, title }: PostProps) {
  return (
    <div>
      {imgSrc && imgAlt && (
        <Image className="aspect-video w-full rounded-xl shadow-lg" src={imgSrc} alt={imgAlt} />
      )}
      <h2 className="mt-6 text-xl font-semibold text-heading sm:mt-8 sm:text-2xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base font-medium text-text sm:mt-6 lg:text-lg">{children}</p>
    </div>
  );
}

export interface PostProps {
  children: ReactNode;
  imgAlt?: string;
  imgSrc?: StaticImageData;
  title: string;
}
