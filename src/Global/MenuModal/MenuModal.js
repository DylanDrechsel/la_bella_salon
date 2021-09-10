import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuModal = ({ handleShow, show, handleClose }) => {
    return (
        <>
            <Modal
                className='Modal'
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
            >
                {/* <Modal.Header closeButton >
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header> */}

                <Modal.Body className='ModalBody'>

                    <Link 
                        to={'/'}
                        onClick={handleClose}
                        className='MenuLink'   
                    >
                        <h3 className='MenuText'> Home </h3> <br />
                    </Link>

                    <Link 
                        to={'/salon'}
                        onClick={handleClose}
                        className='MenuLink'   
                    >
                        <h3 className='MenuText'> Salon </h3> <br />
                    </Link>

                    <Link 
                        to={'/spa'}
                        onClick={handleClose}
                        className='MenuLink'   
                    >
                        <h3 className='MenuText'> Spa </h3> <br />
                    </Link>

                    <Link 
                        to={'/salon-etiquette'}
                        onClick={handleClose}
                        className='MenuLink'
                    >
                        <h3 className='MenuText'> Salon Etiquette </h3> <br />
                    </Link>

                    <Link 
                        to={'/team'}
                        onClick={handleClose}
                        className='MenuLink'
                    >
                        <h3 className='MenuText'> Team </h3> <br />
                    </Link>

                    <Link 
                        to={'/contact'}
                        onClick={handleClose}
                        className='MenuLink'
                    >
                        <h3 className='MenuText'> Contact </h3> <br />
                    </Link>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default MenuModal;