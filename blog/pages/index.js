import { useState } from 'react';
import { PageLayout } from 'components/layout';
import { AuthorIntro, FilteringMenu } from 'components/home';
import { Row } from 'react-bootstrap';

import { useGetBlogsPages } from 'actions/pagination';
import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({ view: { list: 0 } });

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
