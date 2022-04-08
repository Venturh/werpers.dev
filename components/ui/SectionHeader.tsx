import useTranslation from 'next-translate/useTranslation';

import Button from './Button';

type Props = {
	title: string;
	subtitle?: string;
	button?: { text: string; to: string };
};

export default function SectionHeader({ title, subtitle, button }: Props) {
	const { t } = useTranslation('portfolio');
	return (
		<div>
			<div className="flex items-center justify-between mb-1">
				<h1 className="text-xl font-semibold sm:text-2xl ">{t(title)}</h1>
				{button ? (
					<Button size="sm" to={button.to}>
						{' '}
						{t(button.text)}
					</Button>
				) : null}
			</div>
			{subtitle && <h2 className="text-base text-secondary">{t(subtitle)}</h2>}
		</div>
	);
}
