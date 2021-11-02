import React from 'react';
import contact-button from '../Components/contact-button';
import TeamButton from '../Components/TeamButton';

const SlideTwo = () => {
    return (
        <div className='footer-two-div'>
            <h1 className='footer-two-text'> <b> To book an appointment at La Bella Salon & Spa, please give us a call, or visit our team page and contact your favorite stylist. </b> </h1>
            <TeamButton />
            <contact-button />
        </div>
    );
};

export default SlideTwo;