import React, { useEffect, useState, useRef } from 'react';
import './global.css'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Navigation = () => {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground

    useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
        <div>
            <Navbar className='Navbar' expand="sm" fixed="top" /* style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'black'}} */>
                <Container>
                    <Navbar.Brand>
                        <Link 
                            to={'/'}
                            style={{
                                color: '#F5F5F5',
                                textDecoration: 'none',
                                fontFamily: 'Cookie, cursive',
                                fontSize: '24px'
                            }}
                        >
                            La Bella's Salon & Spa
                        </Link>
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                
                                <Nav.Link>
                                    <Link 
                                        to={'/about'}
                                        style={{
                                            color: '#F5F5F5',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        About
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link 
                                        to={'/salon-etiquette'}
                                        style={{
                                            color: '#F5F5F5',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Salon Etiquette
                                    </Link>
                                </Nav.Link>
                                

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