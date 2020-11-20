import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
};

export const getBlogBySlug = async (slug) => {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content[]{..., "asset": asset->}}`,
      { slug }
    )
    .then((res) => res?.[0]);
  return result;
};
