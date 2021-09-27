import React from 'react';
import { Button } from 'react-bootstrap'

const ContactButton = () => {
    return (
        <div className='ContactButtonDiv'>
            <Button size="lg" variant="dark" href='tel:9082360866'> 908-236-0866 </Button>
        </div>
    );
};

export default ContactButton;