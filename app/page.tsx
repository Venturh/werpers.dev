export default function Page() {
	return <div>Test</div>;
}

// import { GetStaticProps } from 'next';
// import useTranslation from 'next-translate/useTranslation';

// import Layout from 'components/layouts/Layout';
// import Projects from 'components/portfolio/Projects';
// import Hero from 'components/portfolio/Hero';
// import Experience from 'components/portfolio/Experience';
// import Stack from 'components/portfolio/Stack';

// import { projects } from 'content';
// import { Project } from '@types';

// const Portfolio = ({ projects, locale }: { projects: Project[]; locale: string }) => {
// 	const { lang } = useTranslation('portfolio');

// 	const title = 'Portfolio - Maximilian Werpers';
// 	const description = 'Maximilian Werpers - Fullstack Software Engineer';
// 	const url = `https://www.werpers.dev/${lang}`;

// 	return (
// 		<Layout title={title} description={description} url={url}>
// 			<Hero />
// 			<Projects projects={projects} locale={locale} />
// 			<Experience />
// 			<Stack />
// 		</Layout>
// 	);
// };
// export default Portfolio;

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
// 	return {
// 		props: {
// 			locale: locale,
// 			projects,
// 		},
// 	};
// };
