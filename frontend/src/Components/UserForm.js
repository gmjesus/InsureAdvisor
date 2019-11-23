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
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default UserForm;
