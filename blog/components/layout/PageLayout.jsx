import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <Header />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
    </>
  );
};

export default PageLayout;
