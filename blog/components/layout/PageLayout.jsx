import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const PageLayout = ({ children, className }) => {
  return (
    <Container>
      <Header />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <Footer />
    </Container>
  );
};

export default PageLayout;
