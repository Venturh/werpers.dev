import { useState } from 'react';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/layouts/Layout';
import ProjectFilters from 'components/projects/ProjectFilters';
import ProjectList from 'components/projects/ProjectList';
import Button from 'components/ui/Button';

import { projects } from 'content';

import { Project } from '@types';

const Projects = ({ projects }: { projects: Project[] }) => {
	const { t, lang } = useTranslation('portfolio');
	const [showFilters, setShowFilters] = useState(false);
	const [filteredProjects, setFilteredProjects] = useState(projects);

	const title = `${t('projects')} - Maximilian Werpers`;
	const description = t('projectsDesc');
	const url = `https://www.werpers.dev/${lang}/projects`;

	return (
		<Layout title={title} description={description} url={url}>
			<div>
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-primary">{t('projects')}</h1>
						<p className="mt-2 text-sm text-secondary">{t('projectsDesc')}</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
						<Button onClick={() => setShowFilters(!showFilters)}>Filter</Button>
					</div>
				</div>

				<div className="space-y-6 mt-6">
					{showFilters && <ProjectFilters projects={projects} onFilter={setFilteredProjects} />}
					<ProjectList projects={filteredProjects} />
				</div>
			</div>
		</Layout>
	);
};

export default Projects;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			projects,
		},
	};
};
