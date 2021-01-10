import { NextSeo } from 'next-seo';

import { Layout } from 'components';
import Hero from 'sections/project/Hero';

import { genearateImage } from 'next-seo.config';
import useTranslation from 'next-translate/useTranslation';
import { getAllFontmatter, getFileBySlug } from 'lib/mdx';
import { ProjectFrontMatter } from '@types';

type ProjectProps = {
  project: { mdxSource: any; frontmatter: ProjectFrontMatter };
  github: any;
};

const Project = ({ project, github }: ProjectProps) => {
  const { t } = useTranslation();
  const url = `https://www.maxwerpers.me/de/projects/${project.frontmatter.slug}`;
  const title = `${t('common:project')}: ${
    project.frontmatter.title
  } - Maximilian Werpers`;
  const { description } = project.frontmatter;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          images: genearateImage(title),
          type: 'website',
        }}
      />

      <Layout>
        <Hero frontmatter={project.frontmatter} github={github} />
      </Layout>
    </>
  );
};

export default Project;

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const project = (await getFileBySlug(locale, 'projects', slug)) as {
    mdxSource: any;
    frontmatter: ProjectFrontMatter;
  };
  const userReposResponse = await fetch(
    `https://api.github.com/repos/venturh/${project.frontmatter.slug}`
  );

  const github = await userReposResponse.json();

  return { props: { project, github }, revalidate: 1 };
}

export async function getStaticPaths({ locales }) {
  const projects = {
    de: getAllFontmatter(locales[0], 'projects') as ProjectFrontMatter[],
    en: getAllFontmatter(locales[1], 'projects') as ProjectFrontMatter[],
  };

  return {
    paths: locales
      .map((locale: 'en' | 'de') => {
        return projects[locale].map((page) => {
          return { params: { slug: page.slug }, locale };
        });
      })
      .flat(),
    fallback: false,
  };
}
