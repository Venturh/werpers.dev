import { NextSeo } from 'next-seo';
import clsx from 'clsx';

import Navigation from 'components/ui/Navigation';
import Footer from 'components/ui/Footer';

import { ogImage } from '@types';

type Props = {
	children: React.ReactNode;
	className?: string;
	title?: string;
	description?: string;
	url?: string;
	ogImage?: ogImage;
};

export default function Layout({ children, className, title, description, url, ogImage }: Props) {
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
			<main className="flex flex-col items-center mx-auto text-base max-w-xsm md:max-w-3xl lg:text-lg">
				<Navigation />
				<div className={clsx(className, 'flex mt-4 flex-col flex-auto w-full h-full')}>
					{children}
				</div>
				<Footer />
			</main>
		</>
	);
}
