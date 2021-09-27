import React from 'react';
import { Button } from 'react-bootstrap'

const TeamButton = () => {
    return (
        <div className='TeamButtonDiv'>
            <Button className='ContactButton' size="lg" variant="dark" href='/team'> <h4 className='TeamButtonText'> MEET THE TEAM! </h4> </Button>
        </div>
    );
};

export default TeamButton;