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
  console.log('🚀 ~ file: mdx.ts ~ line 23 ~ slug', slug);
  console.log('🚀 ~ file: mdx.ts ~ line 23 ~ type', type);
  const location = `content/${locale}/${type}`;
  const fileLocation = `${location}/${slug + '.mdx'}`;

  const { data, content } = matter(fs.readFileSync(fileLocation).toString());
  const mdxSource = await renderToString(content);

  return { mdxSource, frontmatter: data };
}
