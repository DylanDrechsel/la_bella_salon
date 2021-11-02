import React from 'react';
import ContactButton from '../Components/ContactButton';
import TeamButton from '../Components/TeamButton';

const SlideTwo = () => {
    return (
        <div className='footer-two-div'>
            <h1 className='footer-two-text'> <b> To book an appointment at La Bella Salon & Spa, please give us a call, or visit our team page and contact your favorite stylist. </b> </h1>
            <TeamButton />
            <ContactButton />
        </div>
    );
};

export default SlideTwo;