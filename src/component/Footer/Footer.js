import React from 'react';
import { Card } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>
            <Card className="text-center" text="white" bg="dark" variant="dark">

  <Card.Body >
    <Card.Title>© HEXA'S EDUCATION 2007 - 2021</Card.Title>
    <Card.Text>
    Contact us: <span className="email">info@hexasbd.com</span>
    
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

        </div>
    );
};

export default Footer;