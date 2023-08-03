import React from 'react';
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

export const NavbarPage = () => {

 
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="popular-movies">Popular Movies</Nav.Link>
            <Nav.Link href="popular-series">Popular Series</Nav.Link>
          </Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="favorites">Favorites</NavDropdown.Item>
              <NavDropdown.Item href="reported">Reported</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Settings
              </NavDropdown.Item>
            </NavDropdown>        
        </Container>
      </Navbar>
  );
}
