import useTranslation from 'next-translate/useTranslation';

import Discord from './Discord';
import Link from './Link';
import LanguageSwitch from './LanguageSwitch';

import { footer } from 'content';

const Footer = () => {
	const { t } = useTranslation('portfolio');

	return (
		<div className="flex flex-col w-full py-6 space-y-6 text-base">
			<div className="w-full border-t-2 border-accent-primary" />
			{process.env.NODE_ENV === 'production' && <Discord />}
			<div className="grid grid-cols-2 gap-4 text-base sm:grid-cols-3">
				{Object.entries(footer).map(([title, values]) => (
					<div className="space-y-2" key={title}>
						<h3 className="text-xs font-semibold tracking-wider uppercase text-secondary">
							{t(`${title}`)}
						</h3>
						<div className="flex flex-col space-y-3 max-w-min ">
							{values.map(({ link, name, internal }) => (
								<Link key={name} to={link} out={!internal}>
									{title === 'pages' ? t(`${name}`) : name}
								</Link>
							))}
						</div>
					</div>
				))}
				<div className="space-y-2">
					<h3 className="text-xs font-semibold tracking-wider uppercase text-secondary">
						{t('language')}
					</h3>
					<LanguageSwitch withDisplay />
				</div>
			</div>
		</div>
	);
};

export default Footer;
