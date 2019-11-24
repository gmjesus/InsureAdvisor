import React from 'react';
import '../App.css';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Redirect() {
  return (
    <Container>
      <div style={{margin: "auto" }} className = 'buttons'>
					<Button as={Link} to="/broker-form" variant="light" className='button1'>For Brokers</Button>
					<Button as={Link}  to="/user-form" variant="light" className='button2'>For Clients</Button>
			
        </div>
    </Container>
  );
}

export default Redirect;