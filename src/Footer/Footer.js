import React from 'react';
import './Footer.css'
import SlideOne from './SlideOne/SlideOne';
import SlideTwo from './SlideOne/SlideTwo';
import SlideThree from './SlideThree/SlideThree';

const Footer = () => {
    return (
        <div>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
        </div>
    );
};

export default Footer;