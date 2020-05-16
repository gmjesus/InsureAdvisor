import React from 'react';
import '../App.css';
import { Card, Button, Form, Container, InputGroup} from 'react-bootstrap';
import axios from 'axios';

function UserForm() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [age, setAge] = React.useState();
  const [country, setCountry] = React.useState("Canada");
  const [propertyInsurance, setPropertyInsurance] = React.useState(false);
  const [lifeInsurance, setLifeInsurance] = React.useState(false);
  const [carInsurance, setCarInsurance] = React.useState(false);
  const [healthInsurance, setHealthInsurance] = React.useState(false);
  const [disabilityInsurance, setDisabilityInsurance] = React.useState(false);
  const [fireInsurance, setFireInsurance] = React.useState(false);
  const [socialInsurance, setSocialInsurance] = React.useState(false);
  const [otherInsurance, setOtherInsurance] = React.useState(false);
  const [maxLimit, setMaxLimit] = React.useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var types = [];
    if(propertyInsurance){ types.push("Property"); }
    if (lifeInsurance) { types.push("Life"); }
    if (carInsurance) { types.push("Car"); }
    if (healthInsurance) { types.push("Health and Dental"); } 
    if (disabilityInsurance) { types.push("Disability"); } 
    if (fireInsurance) { types.push("Fire"); } 
    if (socialInsurance) { types.push("Social"); } 
    if (otherInsurance) { types.push("Other"); }

    async function postData(){
      await axios({
        method: 'post',
        url: "http://localhost:3001/users",
        data: {
          Name: name,
          Email: email,
          Age: age,
          Citizenship: country,
          InsuranceTypes: types,
          MaxLimit: maxLimit
        }
      });
      window.location.href = "/post-submit";
    }
    postData();
  }

  return (
    <Container>
      <h1 className = 'htitle' style={{textAlign: "center"}}> User Sign Up Form</h1>
      <Card className = 'card1'>
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

          <Form.Group>
            <Form.Label>Country of Residency</Form.Label>
            <Form.Control as="select" onChange={country => setCountry(country.target.value)}>
              <option>Canada</option>
              <option>United States</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>What types of insurance are you looking for?</Form.Label>
            <Form.Check type="checkbox" label="Property Insurance" onChange={propertyInsurance => setPropertyInsurance(propertyInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Life Insurance" onChange={lifeInsurance => setLifeInsurance(lifeInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Car Insurance" onChange={carInsurance => setCarInsurance(carInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Health and Dental Insurance" onChange={healthInsurance => setHealthInsurance(healthInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Disability Insurance" onChange={disabilityInsurance => setDisabilityInsurance(disabilityInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Fire Insurance" onChange={fireInsurance => setFireInsurance(fireInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Social Insurance" onChange={socialInsurance => setSocialInsurance(socialInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Other" onChange={otherInsurance => setOtherInsurance(otherInsurance.target.checked)}/>
          </Form.Group>

          <Form.Group controlId="max">
            <Form.Label>Highest Acceptable Quotes</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control required type="max" placeholder="Enter Maximum Monthly Limit" onChange={max => setMaxLimit(max.target.value)}/>
            </InputGroup>
          </Form.Group>
          <hr />
          <Button variant="primary" type="submit">Submit</Button>

        </Form>
      </Card>
    </Container>
    
  );
}

export default UserForm;