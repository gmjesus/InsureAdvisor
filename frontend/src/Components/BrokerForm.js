import React from 'react';
import '../App.css';
import { Card, Button, Form, FormGroup,Label, Input, Container}
from 'react-bootstrap';



function BrokerForm() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}> Broker Sign Up Form</h1>
      <Card>
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

        <Form.Group controlId="formGroupEmail">
          <Form.Label>What types of insurance are you looking for?</Form.Label>
        
        </Form.Group>
        <Form.Check 
          label="Property Insurance"
        />
        {['Property', 'Life', 'Car', 'Health and Dental', 'Fire', 'Social'].map(type => (
            <Form.Check 
              key={type}
              label={`${type} Insurance`}
            />
        ))}

        <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
    
  );
}

export default BrokerForm;
