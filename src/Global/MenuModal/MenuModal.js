import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuModal = ({ handleShow, show, handleClose }) => {
    return (
        <>
            <Modal
                className='modal'
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
            >

                <Modal.Body className='modal-body'>

                    <Link 
                        to={'/'}
                        onClick={handleClose}
                        className='menu-link'   
                    >
                        <h3 className='menu-text'> Home </h3> <br />
                    </Link>

                    <Link 
                        to={'/salon'}
                        onClick={handleClose}
                        className='menu-link'   
                    >
                        <h3 className='menu-text'> Salon </h3> <br />
                    </Link>

                    <Link 
                        to={'/spa'}
                        onClick={handleClose}
                        className='menu-link'   
                    >
                        <h3 className='menu-text'> Spa </h3> <br />
                    </Link>

                    <Link 
                        to={'/salon-etiquette'}
                        onClick={handleClose}
                        className='menu-link'
                    >
                        <h3 className='menu-text'> Salon Etiquette </h3> <br />
                    </Link>

                    <Link 
                        to={'/team'}
                        onClick={handleClose}
                        className='menu-link'
                    >
                        <h3 className='menu-text'> Team </h3> <br />
                    </Link>

                    <Link 
                        to={'/contact'}
                        onClick={handleClose}
                        className='menu-link'
                    >
                        <h3 className='menu-text'> Contact </h3> <br />
                    </Link>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default MenuModal;