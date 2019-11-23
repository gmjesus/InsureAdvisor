import React from 'react';
import '../App.css';
import { Card, Button, Form, FormGroup,Label, Input, Container}
from 'react-bootstrap';



function ContactForm() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}> Contact Us</h1>
      <Card>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
         </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control type="Age" placeholder="Enter Age" />
        </Form.Group>

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

        <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
    
  );
}

export default ContactForm;
