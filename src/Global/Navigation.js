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


    const handleMenuShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <Navbar className='Navbar' expand="sm" fixed="top">
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
                            La Bella Salon & Spa
                        </Link>
                    </Navbar.Brand>

                    <MenuImage handleMenuShow={handleMenuShow} />
                    <MenuModal handleShow={handleShow} show={show} handleClose={handleClose}/>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;