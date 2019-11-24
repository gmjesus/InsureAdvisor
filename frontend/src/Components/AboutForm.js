import React, {Component} from 'react';
import '../App.css';
import {Carousel, Image, Card, Button, Form, FormGroup, Label, Input, Container, Col, Row}
from 'react-bootstrap';
import jesus from '../Images/Jesus.png';
import richard from'../Images/Richard.jpg';
import arsh from '../Images/Arsh.jpg';
import aasir from '../Images/Aasir.png';

function AboutForm() {
  return (
   
    <Container>
        <h1 style ={{textAlign:"center", color:"white"}}> <b className='b-about'>Revolutionizing the Search for Insurance</b></h1>

        <p class = 'p-about'>
          The hassle of long phone calls and quote estimators are over
        </p>

        
          <Row>
            <Col style = {{textAlign:"center"}}> <Image className="w-100 p-2" src ={jesus} roundedCircle></Image></Col>
            <Col className ="aboutText" >
              <p style ={{textAlign:"center",color:"white"}}>
                <b>Name:</b> Jesus Garcia Moreno<br></br>
                <b>School:</b> University of Waterloo<br></br>
                <b>Program:</b> Computer Engineering<br></br>
                <b>Year:</b> Sophmore
              </p>
            </Col>
            <Col style = {{textAlign:"center"}}> <Image className="w-100 p-2" src ={richard} roundedCircle></Image></Col>
            <Col className ="aboutText" >
              <p style ={{textAlign:"center",color:"white"}}>
              <b>Name:</b> Richard Lii<br></br>
              <b>School:</b> Western University<br></br>
              <b>Program:</b> Software Engineering<br></br>
              <b>Year:</b> Sophmore 
              </p>
            </Col>
          </Row>
          <Row>
            <Col style = {{textAlign:"center"}}> <Image className="w-100 p-2" src ={arsh} roundedCircle></Image></Col>
            <Col className ="aboutText">
              <p style ={{textAlign:"center",color:"white"}}>
              <b>Name:</b> Arsh Lalani<br></br>
              <b>School:</b> Western University<br></br>
              <b>Program:</b> Software Engineering<br></br>
              <b>Year:</b> Sophmore 
              </p>
            </Col>
            <Col style = {{textAlign:"center"}}> <Image className="w-100 p-2" src ={aasir} roundedCircle></Image></Col>
            <Col className ="aboutText">
              <p style ={{textAlign:"center",color:"white"}}>
              <b>Name:</b> Aasir Valji<br></br>
              <b>School:</b> Western University<br></br>
              <b>Program:</b> Software Engineering<br></br>
              <b>Year:</b> Sophmore 
              </p>
            </Col>
          </Row>
    </Container>
  );
}

export default AboutForm;
