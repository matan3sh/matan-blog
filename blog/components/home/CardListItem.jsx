import { Card } from 'react-bootstrap';
import moment from 'moment';
import Link from 'next/link';

const CardListItem = ({ blog, link, mode = 'normal' }) => {
  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            src={blog?.author?.avatar || 'https://via.placeholder.com/150'}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          {mode === 'placeholder' ? (
            <div>
              <Card.Title className='font-weight-bold mb-1'>
                Placeholder Author
              </Card.Title>
              <Card.Text className='card-date'>Placeholder Date</Card.Text>
            </div>
          ) : (
            <div>
              <Card.Title className='font-weight-bold mb-1'>
                {blog?.author?.name}
              </Card.Title>
              <Card.Text className='card-date'>
                {moment(blog?.date).format('LLL')}
              </Card.Text>
            </div>
          )}
        </Card.Header>
        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className='card-main-title'>
                Placholder Title
              </Card.Title>
              <Card.Text>Placeholder Subtitle </Card.Text>
            </>
          ) : (
            <>
              <Card.Title className='card-main-title'>{blog?.title}</Card.Title>
              <Card.Text>{blog?.subtitle}</Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardListItem;
