import { PageLayout } from 'components/layout';
import { AuthorIntro, CardListItem, CardItem } from 'components/home';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className='mb-5'>
        <Col md='10'>
          <CardListItem />
        </Col>
        <Col md='4'>
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Home;
