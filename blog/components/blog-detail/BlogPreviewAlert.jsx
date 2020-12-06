import { Alert } from 'react-bootstrap';

const BlogPreviewAlert = () => {
  return (
    <Alert variant='secondary'>
      This is the preview mode!{' '}
      <Alert.Link href='#'>Leave preview mode</Alert.Link>
    </Alert>
  );
};

export default BlogPreviewAlert;
