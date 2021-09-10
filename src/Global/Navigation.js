import React, { useEffect, useState, useRef } from 'react';
import './global.css'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import MenuImage from'./DropdownButton'
import MenuModal from './MenuModal/MenuModal';
// import pic from '../Assets/transparent-la-bella-logo .png'

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showMenu, setShowMenu] = useState(false)

    const handleMenuShow = () => {
        setShow(!show)
    }

    /* const [dropdown, setDropdown] = useState({
        showDropdown: false
    })

    const toggleDropdown = () => {
        if (dropdown.showDropdown) {
            setDropdown({ showDropdown: false })
        } else {
            setDropdown({ showDropdown: true })
        }
    } */

    /* const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href={pic}
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          &#x25bc;
          {children}
        </a>
      )) */;

    return (
        <div>
            <Navbar className='Navbar' expand="sm" fixed="top" /* style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'black'}} */>
                <Container>
                    <Navbar.Brand>
                        <Link 
                            to={'/'}
                            className='NavbarTitle'
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

                    <MenuImage handleMenuShow={handleMenuShow}/>
                    <MenuModal handleShow={handleShow} show={show} handleClose={handleClose}/>

                    {/* {showMenu ? <MenuModal /> : null} */}

                    {/* <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Custom toggle
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Orange
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                        {/* <Navbar.Toggle className='NavbarToggle' aria-controls="basic-navbar-nav" />
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
                                <NavDropdown.Item href="/salon">Salon</NavDropdown.Item>
                                <NavDropdown.Item href="/spa">Spa</NavDropdown.Item>
        
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;