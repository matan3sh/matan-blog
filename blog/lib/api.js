import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const getClient = (preview) => (preview ? previewClient : client);

export const getAllBlogs = async () => {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`
  );
  return results;
};

export const getPaginatedBlogs = async (
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) => {
  const results = await client.fetch(
    `*[_type == "blog"]{${blogFields}} | order(date ${date}) [${offset}...${
      offset + 3
    }]`
  );
  return results;
};

export const getBlogBySlug = async (slug, preview) => {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content[]{..., "asset": asset->}}`,
      { slug }
    )
    .then((res) => (preview ? res?.[1] : res?.[0]));
  return result;
};
