import './global.css';
import { GeistSans } from 'geist/font/sans';
import Navigation from 'components/ui/Navigation';
import clsx from 'clsx';
import Footer from 'components/ui/Footer';

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
					'min-h-screen bg-primary text-primary font-sans antialiased',
					GeistSans.variable,
				)}
			>
				<div className="relative flex min-h-screen flex-col max-w-3xl mx-auto px-2 md:px-0">
					<Navigation />
					<main className="flex-1 mt-6">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
