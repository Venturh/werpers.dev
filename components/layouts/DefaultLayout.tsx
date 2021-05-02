import { NextSeo } from 'next-seo';

import Navigation from '../Navigation';
import Footer from '../Footer';
import clsx from 'clsx';
import { ogImage } from '@types';

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  url?: string;
  ogImage?: ogImage;
};

const DefaultLayout = ({
  children,
  className,
  title,
  description,
  url,
  ogImage,
}: Props) => {
  return (
    <>
      {title && (
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          twitter={{
            cardType: 'summary_large_image',
            handle: 'venturh94',
            site: 'venturh94',
          }}
          openGraph={{
            title,
            description,
            url,
            images: ogImage ? [ogImage] : null,
            type: 'website',
          }}
        />
      )}
      <main className="flex flex-col items-center mx-auto space-y-6 text-base max-w-xsm md:max-w-2xl lg:text-lg lg:max-w-3xl">
        <Navigation />
        <div
          className={clsx(
            className,
            'md:max-w-2xl flex flex-col flex-auto w-full h-full'
          )}
        >
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default DefaultLayout;
