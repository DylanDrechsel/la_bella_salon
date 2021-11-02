import React from 'react';
import { Button, Row } from 'react-bootstrap'

const contact-button = () => {
    return (
        <div className='contact-button-div'>
           
            <Button className='contact-button' size="lg" variant="dark" href='tel:9082360866'> <h5 className='contact-button-text'> SCHEDULE YOUR APPOINTMENT </h5> </Button>
           
        </div>
    );
};

export default contact-button;