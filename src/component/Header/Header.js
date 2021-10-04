import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'



const Header = () => {
    const  activeStyle={
        fontWeight: "bold",
        color: "red"}
    return (
        <Navbar bg="dark" variant="dark">
        <Container text="red" className="hexa">
        <Navbar.Brand href="#home" >HEXA'S</Navbar.Brand>
       <Nav classname="nav"  >
        <NavLink className="nav-link"  activeStyle={activeStyle} to ="/Home">Home</NavLink>
        <NavLink className="nav-link" activeStyle={activeStyle}to ="/services">Services</NavLink>
        <NavLink className="nav-link" activeStyle={activeStyle} to ="/About">About-Us</NavLink>
        <NavLink className="nav-link" activeStyle={activeStyle} to ="/Contact">Contact-Us</NavLink>
        </Nav>
       </Container>
        </Navbar>
    );
};

export default Header;