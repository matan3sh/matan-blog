import { PageLayout } from 'components/layout';
import { getBlogBySlug, getAllBlogs } from 'lib/api';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog?.slug}</h1>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default BlogDetail;
