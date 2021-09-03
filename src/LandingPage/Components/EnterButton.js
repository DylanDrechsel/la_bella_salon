import React from 'react';
import { Button } from 'react-bootstrap'

const EnterButton = () => {
    return (
        <div className='EnterButtonDiv'>
            <Button className='EnterButton' variant="outline-warning" size="lg">Enter!</Button>{' '}
        </div>
    );
};

export default EnterButton;