import { PageLayout } from 'components/layout';
import { AuthorIntro, CardListItem, CardItem } from 'components/home';
import { Row, Col } from 'react-bootstrap';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => (
          <Col md='4' key={blog.slug}>
            <CardItem blog={blog} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
