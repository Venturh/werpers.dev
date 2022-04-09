import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/layouts/Layout';
import Projects from 'components/portfolio/Projects';
import Hero from 'components/portfolio/Hero';
import Career from 'components/portfolio/Career';
import Skills from 'components/portfolio/Skills';

import { projects } from 'content';
import { Project } from '@types';

const Portfolio = ({ projects, locale }: { projects: Project[]; locale: string }) => {
	const { t, lang } = useTranslation('portfolio');

	const title = 'Portfolio - Maximilian Werpers';
	const description = 'Maximilian Werpers - Fullstack Software Engineer';
	const url = `https://www.werpers.dev/${lang}`;

	return (
		<Layout title={title} description={description} url={url}>
			<Hero />
			<Projects projects={projects} locale={locale} />
			<Career />
			<Skills />
			{/* <About /> */}
		</Layout>
	);
};
export default Portfolio;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			locale: locale,
			projects,
		},
	};
};
