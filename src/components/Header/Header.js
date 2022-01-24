import React, {  } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Container from './../../../node_modules/react-bootstrap/esm/Container';

import logo from './../../images/rooftop-farm-logo.png';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



const Header = () => {

    return (

        // This is Header container
        <header>
            {/* Fixed Navbar */}
            <Navbar bg="muted" expand="md" fixed="top" className="bg-color">
                <Container>
                    <Navbar.Brand href="#" className="header">
                        <img className="img-fluid" src={logo} alt="" />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                            <Nav.Link href="#action2">Blog</Nav.Link>
                            <Nav.Link href="#action2">Product</Nav.Link>
                            <Nav.Link href="#action2">Find Rooftop</Nav.Link>
                            <Nav.Link href="#action2"><FontAwesomeIcon icon={faCartPlus} /> 1</Nav.Link>

                            
                            <Button variant="outline-secondary">Login</Button>
                            
                        </Nav>
                        
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>




    );


}















export default Header;
