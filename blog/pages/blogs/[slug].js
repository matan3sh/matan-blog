import { PageLayout } from 'components/layout';
import { getBlogBySlug, getAllBlogs } from 'lib/api';

import { Row, Col } from 'react-bootstrap';

import BlogDetailHeader from 'components/blog-detail/BlogDetailHeader';
import BlogDetailContent from 'components/blog-detail/BlogDetailContent';
import BlogPreviewAlert from 'components/blog-detail/BlogPreviewAlert';

const BlogDetail = ({ blog, preview }) => {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <BlogPreviewAlert />}
          <BlogDetailHeader blog={blog} />
          <hr />
          {blog.content && <BlogDetailContent content={blog.content} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog, preview },
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
