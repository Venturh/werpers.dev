import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const DefaultGenerator = () => {
	const { resolvedTheme } = useTheme();

	const { t } = useTranslation('portfolio');

	const router = useRouter();

	const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
	const title = searchParams.get('title');

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-bg-secondary">
			<div
				className="relative flex flex-col items-center w-full h-full m-auto space-y-16 text-center shadow-md max-w-7xl text-primary bg-primary "
				style={{}}
			>
				<div className="space-y-4">
					<h3 className="text-xl font-medium md:text-4xl">
						{t('portfolio')} - {t('blog')} - {t('playground')}
					</h3>
					{title && <h2 className="text-2xl font-bold md:text-5xl">{t(title)}</h2>}
				</div>
				<div className="absolute bottom-0 flex justify-between w-full p-4 text-lg md:text-3xl ">
					<p>Maximilian Werpers</p>
					<p> werpers.dev</p>
				</div>
			</div>
		</div>
	);
};

export default DefaultGenerator;
