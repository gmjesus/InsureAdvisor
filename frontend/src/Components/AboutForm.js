import React from 'react';
import '../App.css';
import {Image, Card, Button, Form, FormGroup, Label, Input, Container, Col, Row}
from 'react-bootstrap';
import jesus from '../Images/Jesus.png';



function AboutForm() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}> About Us</h1>
      <Card>
        <Row>
          <Col> <Image className="w-75 p-3 py-3" src ={jesus} roundedCircle></Image> </Col>
          <Col> </Col>
        </Row>
      </Card>
      </Container>
    
  );
}

export default AboutForm;
