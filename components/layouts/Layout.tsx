import { NextSeo } from 'next-seo';
import clsx from 'clsx';

import Navigation from 'components/ui/Navigation';
import Footer from 'components/ui/Footer';

import { ogImage } from '@types';

type Props = {
	children: React.ReactNode;
	title?: string;
	description?: string;
	url?: string;
	ogImage?: ogImage;
};

export default function Layout({ children, title, description, url, ogImage }: Props) {
	return (
		<>
			{title && (
				<NextSeo
					title={title}
					description={description}
					canonical={url}
					twitter={{
						cardType: 'summary_large_image',
						handle: 'venturh94',
						site: 'venturh94',
					}}
					openGraph={{
						title,
						description,
						url,
						images: ogImage ? [ogImage] : null,
						type: 'website',
					}}
				/>
			)}
			<main className="flex flex-col items-center mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<Navigation />
				<div className="flex w-full space-y-6 mt-4 flex-col flex-auto">{children}</div>
				<Footer />
			</main>
		</>
	);
}
