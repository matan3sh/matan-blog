import { useState } from 'react';
import { PageLayout } from 'components/layout';
import { AuthorIntro, FilteringMenu } from 'components/home';
import { Row, Button } from 'react-bootstrap';

import { useGetBlogsPages } from 'actions/pagination';
import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({ view: { list: 0 }, date: { asc: 0 } });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className='mb-5'>{pages}</Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size='lg'
          variant='outline-secondary'
        >
          {isLoadingMore
            ? '...'
            : isReachingEnd
            ? 'No More Blogs'
            : 'Load More'}
        </Button>
      </div>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
