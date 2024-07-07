import Clickable from 'components/ui/Clickable';
import Image from 'next/image';

export default function Hero() {
	return (
		<div className="sm:flex sm:flex-row-reverse sm:justify-end items-center">
			<div>
				<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl ">Maximilian Werpers</h1>
				<h2 className="text-secondary mt-4">
					Fullstack Software Engineer currently at
					<Clickable
						as="span"
						className="font-semibold text-brand-primary hover:text-brand-secondary"
						out
						href="https://heizung-billiger.de"
					>
						{' '}
						Käsmayr GmbH
					</Clickable>
					<p>Working remotely from Funchal, Portugal 🏝️.</p>
				</h2>
			</div>
			<Image
				className="rounded-xl sm:mr-12 shrink-0 w-36 h-36 mx-auto sm:mx-0 border-2 hover:border-brand-primary/50 hover:scale-[1.05] transition-all duration-200 border-accent-primary"
				src="/profile.jpeg"
				height={500}
				width={500}
				alt="Picture of the author"
			/>
		</div>
	);
}
