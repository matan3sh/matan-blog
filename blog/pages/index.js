import { useState } from 'react';
import { PageLayout } from 'components/layout';
import {
  AuthorIntro,
  CardListItem,
  CardItem,
  FilteringMenu,
} from 'components/home';
import { Row, Col } from 'react-bootstrap';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({ view: { list: 0 } });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className='mb-5'>
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col md='9' key={`${blog.slug}-list`}>
              <CardListItem
                blog={blog}
                link={{ href: '/blogs/[slug]', as: `/blogs/${blog.slug}` }}
              />
            </Col>
          ) : (
            <Col md='4' key={blog.slug}>
              <CardItem
                blog={blog}
                link={{ href: '/blogs/[slug]', as: `/blogs/${blog.slug}` }}
              />
            </Col>
          )
        )}
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
