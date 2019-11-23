import React from 'react';
import '../App.css';
import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function PostSubmit() {
  return (
    <Container className = 'post-displayy'>
      <div style={{margin: "auto" }} >
				<h1 className= 'post-header'>Thank you for your submission</h1>
                <p className= 'post-details'> Someone will be in touch with you shortly</p>
        </div>
    </Container>
  );
}

export default PostSubmit;