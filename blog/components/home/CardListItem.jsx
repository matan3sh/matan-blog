import { Card } from 'react-bootstrap';
import Link from 'next/link';

const CardListItem = ({ blog, link }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            src={blog?.author?.avatar || 'https://via.placeholder.com/150'}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {blog?.author?.name}
            </Card.Title>
            <Card.Text className='card-date'>{blog?.date}</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className='card-main-title'>{blog?.title}</Card.Title>
          <Card.Text>{blog?.subtitle}</Card.Text>
        </Card.Body>
      </div>
      <Link {...link}>
        <a className='card-button'>Read More</a>
      </Link>
    </Card>
  );
};

export default CardListItem;
