import React from 'react';
import { Button } from 'react-bootstrap'

const ContactButton = () => {
    return (
        <div className='ContactButtonDiv'>
            <Button className='ContactButton' size="lg" variant="dark" href='tel:9082360866'> <h5 className='ContactButtonText'> SCHEDULE YOUR APPOINTMENT </h5> </Button>
        </div>
    );
};

export default ContactButton;