
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">🌿 Plateforme Agricole</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-agri" />
        <Navbar.Collapse id="navbar-agri">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <NavDropdown title="🌾 Évaluation" id="nav-evaluation">
              <NavDropdown.Item href="/evaluation/voir">Voir l'évolution</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="👤 Compte" id="nav-login" align="end">
              <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
              <NavDropdown.Item href="/register">S'inscrire</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;



