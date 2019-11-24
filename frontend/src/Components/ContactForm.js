import React from 'react';
import '../App.css';
import { Card, Button, Form, FormGroup,Label, Input, Container}
from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
faFacebook,
faTwitter,
faLinkedin,
} from "@fortawesome/free-brands-svg-icons"



function ContactForm() {
  return (
    <Container>
      <div className='contact-details'>
      <h1 style={{textAlign: "center"}}> Contact Us</h1>
   
     <p className = 'bd'>We are here to connect you to the best Financial Advisor based on your preferences. 
      For any questions or inquires please feel free to contact us at 224-555-3214. We would be more than happy to answer your questions. 
      Don't Worry, We Got Your Back!</p>
    <div className = 'alignment'> 
      <Form>
        <Form.Group controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" />
        </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="password" placeholder="Enter email" />
          </Form.Group>
             <Form.Group controlId="formGroupMessage">
                 <Form.Label>Message</Form.Label>
                <Form.Control className = 'we' type="message" placeholder="What to you want tell us?" />
              </Form.Group>
        
        <Button variant="outline-dark">Send</Button>


 
      </Form>
</div>
</div>
<div className = "social-containers">
<h2>@InsureAdvisor</h2>
<a
    href="https://www.facebook.com/"
    className="facebook social"
 >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
 </a>
 <a href="https://www.twitter.com/" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.linkedin.com/"
  className="linkedin social"
>
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
</div>
    </Container>

    
  );
}

export default ContactForm;
