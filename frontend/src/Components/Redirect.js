import React from 'react';
import '../App.css';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Redirect() {
  return (
    <Container>
      <div className="d-flex flex-column">
				<ButtonGroup size="lg">
					<Button as={Link} to="/broker-form" variant="light">For Brokers</Button>
					<Button as={Link} to="/user-form" variant="light">For Clients</Button>
				</ButtonGroup>
			</div>
    </Container>
  );
}

export default Redirect;