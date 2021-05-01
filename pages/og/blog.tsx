import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Logo } from 'components';

const DefaultGenerator = () => {
  const { t } = useTranslation('portfolio');

  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const title = searchParams.get('title');
  const summary = searchParams.get('summary');
  const readingTime = searchParams.get('readingTime');
  const date = searchParams.get('date');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg-secondary">
      <div className="relative flex flex-col items-center h-full px-24 m-auto space-y-16 text-center shadow-md max-w-7xl text-primary bg-primary ">
        <Logo className="mt-24" type="mobile" h="h-32 md:h-48 " />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-6xl">{title}</h1>
        </div>
        <div className="absolute bottom-0 flex items-center justify-between w-full p-4 ">
          <div className="flex flex-col items-start">
            <p className="text-lg md:text-3xl">Maximilian Werpers</p>
            <span className="text-base md:text-xl">
              {date} {readingTime && `- ${readingTime}`}
            </span>
          </div>
          <p className="text-lg md:text-3xl">werpers.dev</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultGenerator;
