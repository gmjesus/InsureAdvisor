import React from 'react';
import '../App.css';
import { Card, Button, Form, FormGroup,Label, Input, Container}
from 'react-bootstrap';



function AboutForm() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}> About Us</h1>
      <Card>
      <Form>
        
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

export default AboutForm;
