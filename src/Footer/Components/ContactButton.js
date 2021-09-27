import React from 'react';
import { Button } from 'react-bootstrap'

const ContactButton = () => {
    return (
        <div className='ContactButtonDiv'>
            <Button className='ContactButton' size="lg" variant="dark" href='tel:9082360866'> <h5 className='ContactButtonText'> 908-236-0866 </h5> </Button>
        </div>
    );
};

export default ContactButton;