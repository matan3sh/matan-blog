import client from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'avatar': avatar.asset->url}
`;

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
};
