import React from 'react';
import ContactButton from '../Components/ContactButton';
import TeamButton from '../Components/TeamButton';

const SlideTwo = () => {
    return (
        <div className='FooterTwoDiv'>
            <h1 className='FooterTwoText'> <b> To book an appointment at La Bella Salon & Spa, please give us a call, or visit our team page and contact your favorite stylist. </b> </h1>
            <ContactButton />
            <TeamButton />
        </div>
    );
};

export default SlideTwo;