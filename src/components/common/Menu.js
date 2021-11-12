import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand as={Link} to="/">Recursos418</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Recursos 📚" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/re/frontend">✅ Frontend</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/re/backend">✅ Backend</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/re/testing">✅ Testing</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/re/otros">✅ Otros</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/about">About 👨‍💻</Nav.Link>
          <Nav.Link as={Link} to="/aportar">Aportar 🙌</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto 😁</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;