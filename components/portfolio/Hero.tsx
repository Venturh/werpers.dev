import Clickable from 'components/ui/Clickable';
import Link from 'components/ui/Link';

export default function Hero() {
	return (
		<div>
			<h1 className="text-2xl font-bold tracking-tight sm:text-3xl ">Maximilian Werpers</h1>
			<h2 className="text-secondary">
				Fullstack Software Engineer currently at
				<Clickable
					as="span"
					className="font-semibold text-brand-primary hover:text-brand-secondary"
					out
					href="https://clickbar.dev/"
				>
					{' '}
					clickbar.
				</Clickable>
			</h2>
		</div>
	);
}
