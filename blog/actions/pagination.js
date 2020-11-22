import { useEffect } from 'react';
import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';

import { Col } from 'react-bootstrap';
import {
  CardListItem,
  CardItem,
  CardItemBlank,
  CardListItemBlank,
} from 'components/home';

export const useGetBlogsPages = ({ blogs, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;

      if (typeof window !== 'undefined' && window.__pagination__init)
        initialData = null;

      const { data: paginatedBlogs } = withSWR(
        useGetBlogs({ offset, filter }, initialData)
      );

      if (!paginatedBlogs) {
        return Array(3)
          .fill(0)
          .map((_, i) =>
            filter.view.list ? (
              <Col key={i} md='9'>
                <CardListItemBlank />
              </Col>
            ) : (
              <Col key={`${i}-item`} md='4'>
                <CardItemBlank />
              </Col>
            )
          );
      }

      return paginatedBlogs.map((blog) =>
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
      if (SWR.data && SWR.data.length === 0) return null;
      return (index + 1) * 3;
    },
    [filter]
  );
};
