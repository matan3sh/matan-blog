import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ blog, link }) => {
  return (
    <Card className={`fj-card`}>
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
        <div className='view overlay'>
          <Card.Img
            src={urlFor(blog?.coverImage).height(300).url()}
            alt={blog?.slug}
          />
        </div>
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

export default CardItem;
