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
import { useGetBlogs } from 'actions';

const Home = ({ blogs: initialData }) => {
  const [filter, setFilter] = useState({ view: { list: 0 } });

  const { data: blogs, error } = useGetBlogs(initialData);

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
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
