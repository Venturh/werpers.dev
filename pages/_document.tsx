import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class Document extends NextDocument {
	static async getInitialProps(context: DocumentContext) {
		const initialProps = await NextDocument.getInitialProps(context);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#161821" />
					<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
					{process.env.NODE_ENV === 'production' && (
						<script
							async
							defer
							data-website-id="37743e86-3ae5-45ba-9122-8d5dfd42af51"
							src="https://unami-analytics-production.up.railway.app/umami.js"
							data-do-not-track="true"
							data-domains="werpers.dev"
						/>
					)}
					<meta name="msapplication-TileColor" content="#161821" />
					<meta name="theme-color" content="#161821"></meta>
				</Head>
				<body className="min-h-screen text-base text-primary bg-primary">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
