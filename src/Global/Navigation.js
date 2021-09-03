import React from 'react';
import './global.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div>
            <Navbar className='Navbar' /* bg="light" */ expand="lg">
                <Container>
                    <Navbar.Brand>La Bella's Salon & Spa</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>Salon Etiquette</Nav.Link>
                                

                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Salon</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Spa</NavDropdown.Item>
        
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;