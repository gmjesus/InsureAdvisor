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
      <h1 style ={{textAlign:"center",color:"white"}}> Contact Us</h1>
   
     <p className = 'bd' style ={{textAlign:"center",color:"white"}}>We are here to connect you to the best Financial Advisor based on your preferences. 
      For any questions or inquires please feel free to contact us at 224-555-3214. We would be more than happy to answer your questions. 
      Don't Worry, We Got Your Back!</p>
    <div className = 'alignment'> 
      <Form>
        <Form.Group controlId="formGroupName">
          <Form.Label style ={{textAlign:"center",color:"white"}}>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" />
        </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label style ={{textAlign:"center",color:"white"}}>Email</Form.Label>
            <Form.Control type="password" placeholder="Enter email" />
          </Form.Group>
             <Form.Group controlId="formGroupMessage">
                 <Form.Label style ={{textAlign:"center",color:"white"}}>Message</Form.Label>
                <Form.Control className = 'we' type="message" placeholder="What to you want tell us?" />
              </Form.Group>
        
        <Button style ={{textAlign:"center",color:"white"}} variant="outline-dark">Send</Button>


 
      </Form>
</div>
</div>
<div className = "social-containers">
<h2 style ={{textAlign:"center",color:"white"}}>@InsureAdvisor</h2>
<a style ={{textAlign:"center",color:"white"}}
    href="https://www.facebook.com/"
    className="facebook social"
 >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
 </a>
 <a  style ={{textAlign:"center",color:"white"}}
 href="https://www.twitter.com/" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a style ={{textAlign:"center",color:"white"}}
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
