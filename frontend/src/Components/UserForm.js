import React from 'react';
import '../App.css';
import { Card, Button, Form, Container} from 'react-bootstrap';

function UserForm() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [age, setAge] = React.useState();
  const [type, setType] = React.useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();

  }
  console.log(name);
  console.log(email);
  console.log(age);

  return (
    <Container>
      <h1 style={{textAlign: "center"}}> User Sign Up Form</h1>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="name" placeholder="Enter Full Name" onChange={name => setName(name.target.value)}/>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter Email" onChange={email => setEmail(email.target.value)}/>
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control required type="age" placeholder="Enter Age" onChange={age => setAge(age.target.value)}/>
          </Form.Group>

          <Form.Label>What types of insurance are you looking for?</Form.Label>
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

export default UserForm;
