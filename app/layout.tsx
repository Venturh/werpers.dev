import './global.css';
import { GeistSans } from 'geist/font/sans';
import Navigation from 'components/ui/Navigation';
import clsx from 'clsx';
import Footer from 'components/ui/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	metadataBase: new URL('https://werpers.dev'),
	title: {
		default: 'Maximilian Werpers',
		template: '%s | Maximilian Werpers',
	},
	description: 'Fullstack developer.',
	openGraph: {
		title: 'Maximilian Werpers',
		description: 'Fullstack developer.',
		url: 'https://werpers.dev',
		siteName: 'Maximilian Werpers',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	twitter: {
		title: 'Maximilian Werpers',
		card: 'summary_large_image',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{process.env.NODE_ENV === 'production' && (
				<script
					async
					defer
					data-website-id="22ea2066-c4a9-47c1-b56b-6f3e48acbc49"
					src="https://umami.werpers.dev/script.js"
				/>
			)}
			<body
				className={clsx(
					'bg-primary text-primary font-sans antialiased min-h-screen',
					GeistSans.variable,
				)}
			>
				<div className="relative h-screen flex flex-col bg-background max-w-2xl mx-auto">
					<Navigation />
					<main className="flex-1 mt-6  px-4 xl:px-0">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
