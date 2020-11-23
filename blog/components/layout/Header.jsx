import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className='fj-navbar fj-nav-base' bg='transparent' expand='lg'>
      <Navbar.Brand className='fj-navbar-brand'>
        <Link href='/' as={`/`}>
          <a>Matan-Shaviro</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link
            className='fj-navbar-item fj-navbar-link'
            href='/'
            as={() => (
              <Link href='/'>
                <a className='fj-navbar-item fj-navbar-link'>Home</a>
              </Link>
            )}
          />
          <button className='btn btn-success' onClick={toggleTheme}>
            {theme.type}
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
