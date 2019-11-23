import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown,FormControl,Container, Form, Button}
from 'react-bootstrap';

import { Link } from "react-router-dom";

function Navigate() {
  return (
    <Container>
        <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">InsuranceAdvisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigate;