import React from 'react';
import '../App.css';
import { Button, Form, FormGroup,Label, Input, Container}
from 'react-bootstrap';



function UserForm() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}> USER SIGN UP FORM</h1>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="full name" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control type="Age" placeholder="Enter Age" />
        </Form.Group>

      </Form>

      <Form>
      <Form.Group controlId="formGroupEmail">
          <Form.Label>What types of insurance are you looking for?</Form.Label>
        
        </Form.Group>
      <Form.Check 
        label="Property Insurance"
      />
  {['Property', 'Life', 'Car', 'Health and Dental', 'Fire', 'Social'].map(type => (
      <Form.Check 
        id={type}
        label={`${type} Insurance`}
      />
  ))}
 
  
  
  
</Form>
    </Container>
    
  );
}

export default UserForm;
