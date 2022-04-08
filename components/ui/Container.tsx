import useTranslation from 'next-translate/useTranslation';
import Button from './Button';

type Props = {
	title: string;
	subtitle?: string;
	button?: { text: string; to?: string; onClick?: () => void };
	children: React.ReactChild;
};

const Container = ({ title, subtitle, button, children }: Props) => {
	const { t } = useTranslation('portfolio');
	return (
		<div className="mt-4">
			<div className="flex items-center justify-between mb-1">
				<h1 className="text-2xl font-bold sm:text-3xl">{t(title)}</h1>
				{button ? (
					<Button onClick={button.onClick} to={button.to}>
						{button.text}
					</Button>
				) : null}
			</div>
			{subtitle && <h2 className="text-secondary">{t(subtitle)}</h2>}
			<div className="mt-4">{children}</div>
		</div>
	);
};

export default Container;
