import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown,FormControl,Container, Form, Button}
from 'react-bootstrap';
import logo from '../Images/i_logo.ico'

import { Link } from "react-router-dom";

function Navigate() {
  return (
    <Container>
      <div className= "nav-white">
        <Navbar bg="transparent" expand="lg" varient="dark">
        <Navbar.Brand style= {{color:"white"}} href="/">
        <img src = {logo} className = 'logo'></img>
        InsuranceAdvisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style= {{color:"white"}} className="ml-auto">
            <Nav.Link style= {{color:"white"}} as={Link} to="/about">About</Nav.Link>
            <Nav.Link style= {{color:"white"}} as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      

      
    </Container>
  );
}

export default Navigate;