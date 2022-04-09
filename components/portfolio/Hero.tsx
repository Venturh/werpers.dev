import useTranslation from 'next-translate/useTranslation';

import Link from 'components/ui/Link';

const Hero = () => {
	const { t } = useTranslation('portfolio');

	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="text-2xl font-bold tracking-tight sm:text-3xl ">Maximilian Werpers</h1>
				<h2 className="tracking-tight text-secondary">
					Fullstack Software Engineer {t('at') + ' '}
					<Link className="text-brand-primary" out to="https://clickbar.dev/">
						<span className="font-medium text-brand-primary hover:text-brand-secondary">
							clickbar
						</span>
					</Link>
				</h2>
			</div>
			{/* <div className="w-32 h-32 rounded-full bg-gradient-to-r from-brand-primary to-teal-400 dark:to-teal-400" /> */}
		</div>
	);
};

export default Hero;
