import React from 'react';
import '../App.css';
import { Card, Button, Form, Container, InputGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function BrokerForm() {
  const [name, setName] = React.useState();
  const [company, setCompany] = React.useState("Great West Life");
  const [email, setEmail] = React.useState();
  const [country, setCountry] = React.useState("Canada");
  const [propertyInsurance, setPropertyInsurance] = React.useState(false);
  const [lifeInsurance, setLifeInsurance] = React.useState(false);
  const [carInsurance, setCarInsurance] = React.useState(false);
  const [healthInsurance, setHealthInsurance] = React.useState(false);
  const [disabilityInsurance, setDisabilityInsurance] = React.useState(false);
  const [fireInsurance, setFireInsurance] = React.useState(false);
  const [socialInsurance, setSocialInsurance] = React.useState(false);
  const [otherInsurance, setOtherInsurance] = React.useState(false);
  const [minLimit, setMinLimit] = React.useState();
  const [maxLimit, setMaxLimit] = React.useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var types = [];
    if(propertyInsurance){
      types.push("Property");
    }
    if (lifeInsurance) {
      types.push("Life");
    }
    if (carInsurance) {
      types.push("Car");
    }
    if (healthInsurance) {
      types.push("Health and Dental");
    } 
    if (disabilityInsurance) {
      types.push("Disability");
    } 
    if (fireInsurance) {
      types.push("Fire");
    } 
    if (socialInsurance) {
      types.push("Social");
    } 
    if (otherInsurance) {
      types.push("Other");
    }

    async function postData(){
      var range = [minLimit, maxLimit];
      await axios({
        method: 'post',
        url: "http://localhost:3001/advisors",
        data: {
          Name: name,
          Email: email,
          Company: company,
          Citizenship: country,
          InsuranceTypes: types,
          Range: range,
        }
      });
      window.location.href = "/matches";
    }
    postData();
  }

  return (
    <Container>
      <h1 style={{textAlign: "center"}}>Broker Sign Up Form</h1>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="name" placeholder="Enter Full Name" onChange={name => setName(name.target.value)}/>
          </Form.Group>

          <Form.Group controlId="company">
            <Form.Label>Company Name</Form.Label>
            <Form.Control multiple as="select" required type="company" onChange={company => setCompany(company.target.value)}>
              <option>Great West Life</option>
              <option>Manulife Financial </option>
              <option>Power Financial</option>
              <option>Sun Life Financial</option>
              <option>Fairfax Financial</option>
              <option>iA Financial Group</option>
              <option>Co-operators Group</option>
              <option>Desjardins</option>
              <option>Industrial Alliance Insurance	</option>
              <option>Intact Financial</option>
              <option>State Farm</option>
              <option>Berkshire Hathaway</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter Email" onChange={email => setEmail(email.target.value)}/>
          </Form.Group>  

          <Form.Group>
            <Form.Label>Employment Location</Form.Label>
            <Form.Control required as="select" onChange={country => setCountry(country.target.value)}>
              <option>Canada</option>
              <option>United States</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>What types of insurance do you specialize in?</Form.Label>
            <Form.Check type="checkbox" label="Property Insurance" onChange={propertyInsurance => setPropertyInsurance(propertyInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Life Insurance" onChange={lifeInsurance => setLifeInsurance(lifeInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Car Insurance" onChange={carInsurance => setCarInsurance(carInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Health and Dental Insurance" onChange={healthInsurance => setHealthInsurance(healthInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Disability Insurance" onChange={disabilityInsurance => setDisabilityInsurance(disabilityInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Fire Insurance" onChange={fireInsurance => setFireInsurance(fireInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Social Insurance" onChange={socialInsurance => setSocialInsurance(socialInsurance.target.checked)}/>
            <Form.Check type="checkbox" label="Other" onChange={otherInsurance => setOtherInsurance(otherInsurance.target.checked)}/>
          </Form.Group>

          <Row>
            <Col>
            <Form.Group controlId="min">
              <Form.Label>Lowest Acceptable Quotes</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control required type="min" placeholder="Enter Minimum Monthly Limit" onChange={min => setMinLimit(min.target.value)}/>
              </InputGroup>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="max">
              <Form.Label>Highest Acceptable Quotes</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control required type="max" placeholder="Enter Maximum Monthly Limit" onChange={max => setMaxLimit(max.target.value)}/>
              </InputGroup>
            </Form.Group>
            </Col>
          </Row>

          <hr />
          <Button variant="primary" type="submit">Submit</Button>

        </Form>
      </Card>
    </Container>
    
  );
}

export default BrokerForm;
