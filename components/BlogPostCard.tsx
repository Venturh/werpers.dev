import { BlogFrontMatter } from '@types';
import { ButtonOrLink, Labels, ViewCounter } from 'components';

const BlogPostCard = ({
  title,
  slug,
  date,
  readingTime,
  categories,
  summary,
}: BlogFrontMatter) => {
  return (
    <ButtonOrLink key={slug} to={`/blog/${slug}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
        <span className="text-lg font-medium md sm:text-xl text-primary">
          {title}
        </span>
        <ViewCounter className="text-base" slug={slug} />
      </div>
      <div className="flex items-center space-x-2 text-sm text-secondary">
        <div className="space-x-1">
          <span>{date}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} read</span>
        </div>
        {categories && (
          <Labels labels={categories} variant="15" max={3} small />
        )}
      </div>
      <p className="mt-1 prose">{summary}</p>
    </ButtonOrLink>
  );
};

export default BlogPostCard;
