import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Logo } from 'components';

const DefaultGenerator = () => {
  const { t, lang } = useTranslation('portfolio');

  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  // const link = searchParams.get('url');
  // console.log('🚀 ~ file: index.tsx ~ line 11 ~ DefaultGenerator ~ link', link);

  // //if (!link) return null;

  // const linkURL = new URL(link);
  const title = searchParams.get('title');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg-secondary">
      <div
        className="relative flex flex-col items-center w-full h-full m-auto space-y-16 text-center shadow-md max-w-7xl text-primary bg-primary "
        style={{}}
      >
        <Logo className="mt-24" type="mobile" h="h-32 md:h-48 " />
        <div className="space-y-4">
          <h3 className="text-xl font-medium md:text-4xl">
            {' '}
            {t('portfolio')} - {t('blog')} - {t('playground')}
          </h3>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-6xl">
              Maximilian Werpers
            </h1>
            {title && (
              <h2 className="text-2xl font-medium md:text-5xl">{t(title)}</h2>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full p-4 text-lg md:text-3xl ">
          <p></p>
          <p> werpers.dev</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultGenerator;
