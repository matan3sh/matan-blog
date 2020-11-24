import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = ({ theme, toggle }) => {
  return (
    <Navbar
      variant={theme.type}
      className='fj-navbar fj-nav-base'
      bg='transparent'
      expand='lg'
    >
      <Navbar.Brand className='fj-navbar-brand'>
        <Link href='/' as={`/`}>
          <a style={{ color: theme.fontColor }}>Matan-Shaviro</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <ThemeToggle onChange={toggle} />
          <Nav.Link
            className='fj-navbar-item fj-navbar-link'
            href='/'
            as={() => (
              <Link href='/'>
                <a className='fj-navbar-item fj-navbar-link'>Home</a>
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
