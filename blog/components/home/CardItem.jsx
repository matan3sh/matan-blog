import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ blog, link, mode = 'normal' }) => {
  return (
    <Card className={`fj-card ${mode}`}>
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
            {mode === 'placeholder' ? (
              <>
                <Card.Title className='font-weight-bold mb-1'>
                  Placeholder Author
                </Card.Title>
                <Card.Text className='card-date'>Placeholder Date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className='font-weight-bold mb-1'>
                  {blog?.author?.name}
                </Card.Title>
                <Card.Text className='card-date'>{blog?.date}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className='view overlay'>
          {mode === 'placeholder' ? (
            <div className='image-placeholder' />
          ) : (
            <Card.Img
              src={urlFor(blog?.coverImage)
                .height(300)
                .crop('center')
                .fit('clip')
                .url()}
              alt={blog?.slug}
            />
          )}
        </div>
        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className='card-main-title'>
                Placeholder Title
              </Card.Title>
              <Card.Text>Placeholder Subtitle</Card.Text>
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

export default CardItem;
