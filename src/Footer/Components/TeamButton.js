import React from 'react';
import { Button } from 'react-bootstrap'

const TeamButton = () => {
    return (
        <div className='team-button-div'>
            <Button className='contact-button' size="lg" variant="dark" href='/team'> <h4 className='team-button-text'> MEET THE TEAM! </h4> </Button>
        </div>
    );
};

export default TeamButton;