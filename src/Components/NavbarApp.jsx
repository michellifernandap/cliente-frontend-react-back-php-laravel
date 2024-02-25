
import "../Styles/components/NavbarApp.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarApp() {
  return (
    <Navbar className='mx-4 border border-5 rounded-4' bg="light" expand="lg">
      <Container className='mx-2' fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-0 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Menu</Nav.Link>
            <Nav.Link href="#action2">Quienes Somos</Nav.Link>
            <NavDropdown title="Tablas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Clientes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Peliculas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Provedores
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;