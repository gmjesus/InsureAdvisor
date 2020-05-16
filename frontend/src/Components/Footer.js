import React from 'react';
import '../App.css';
import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className = 'footer'>
      <div>
        <footer class = "copyright">
          <h5>&copy; 2019 InsureAdvisor</h5>
        </footer>
      </div>
    </Container>
  );
}

export default Footer;