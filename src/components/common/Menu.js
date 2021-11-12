import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Recursos 📚" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">✅ Frontend</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">✅ Backend</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">✅ Testing</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">✅ Otros</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#features">About 👨‍💻</Nav.Link>
          <Nav.Link href="#pricing">Aportar 🙌</Nav.Link>
          <Nav.Link href="#pricing">Contacto 😁</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;