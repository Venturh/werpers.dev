import './global.css';
import { GeistSans } from 'geist/font/sans';
import Navigation from 'components/ui/Navigation';
import clsx from 'clsx';
import Footer from 'components/ui/Footer';
import type { Metadata } from 'next';
import svgToDataUri from 'mini-svg-data-uri';

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
					data-website-id="c4375a93-dd92-40f2-a93b-39f725c8d54c"
					src="https://umami-analytics-sage.vercel.app/umami.js"
				/>
			)}
			<body
				className={clsx(
					'bg-primary text-primary font-sans antialiased min-h-screen dark:bg-grid-zinc-700/[0.5] bg-grid-black/[0.05]',
					GeistSans.variable,
				)}
			>
				<div className="relative h-screen flex flex-col bg-background max-w-5xl mx-auto">
					<Navigation />
					<main className="flex-1 mt-6  px-4 xl:px-0">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
