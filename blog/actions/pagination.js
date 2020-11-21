import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';

import { Col } from 'react-bootstrap';
import { CardListItem, CardItem } from 'components/home';

export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      const { data: blogs } = withSWR(useGetBlogs(initialData));
      if (!blogs) return 'Loading...';
      return blogs.map((blog) =>
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
      );
    },
    // here you will compute offset that will passed into previous callback function
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      return 0;
    },
    [filter]
  );
};
