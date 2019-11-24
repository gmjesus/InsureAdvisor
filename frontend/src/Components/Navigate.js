import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown,FormControl,Container, Form, Button}
from 'react-bootstrap';
import logo from '../Images/i_logo.ico'

import { Link } from "react-router-dom";

function Navigate() {
  return (
    <Container>
        <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
        <img src = {logo} className = 'logo'></img>
        InsuranceAdvisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigate;