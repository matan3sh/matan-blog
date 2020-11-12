import React from 'react';
import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
  return (
    <Row>
      <Col md='8'>
        <Media className='mb-4 admin-intro'>
          <Image
            roundedCircle
            width={64}
            height={64}
            className='mr-3'
            src='https://avatars0.githubusercontent.com/u/44439428?s=460&u=27fed5ba4905eae94ad362b54b683d3c48c39316&v=4'
            alt='Generic placeholder'
          />
          <Media.Body>
            <h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
            <p className='welcome-text'>
              My name is Matan Shaviro and I am an experienced software engineer
              and freelance developer. and this is my blog page.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
