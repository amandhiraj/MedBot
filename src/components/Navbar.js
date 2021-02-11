import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">MedBot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/About">About</Nav.Link> */}
                    <Nav.Link href="/Contact">Self-Assessment</Nav.Link>
                  {/* <Nav.Link href="/Products">Navigate</Nav.Link> */}
                    <Nav.Link href = "/Medicines"> Medicine</Nav.Link>
                    <Nav.Link href = "/Calendar"> Schedule Appointment</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);