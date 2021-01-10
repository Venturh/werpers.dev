import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
const root = process.cwd();

export function getAllFontmatter(locale: string, type: string) {
  const location = `content/${locale}/${type}`;
  const files = fs.readdirSync(path.join(root, location));

  return files.map((filename) => {
    const contents = fs.readFileSync(`${location}/${filename}`).toString();
    const { data } = matter(contents);
    return data;
  });
}

export async function getFileBySlug(
  locale: string,
  type: string,
  slug: string
) {
  const location = `content/${locale}/${type}`;
  const files = fs.readdirSync(path.join(root, location));
  const file = files.find((f) => f.split('_')[1] === slug + '.mdx');
  const fileLocation = `${location}/${file}`;

  const { data, content } = matter(fs.readFileSync(fileLocation).toString());
  const mdxSource = await renderToString(content);

  return { mdxSource, frontmatter: data };
}
