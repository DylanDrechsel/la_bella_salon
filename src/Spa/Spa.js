import React, { useEffect } from 'react';
import './Spa.css'
import SlideOne from './SlideOne/SlideOne';
import SlideTwo from './SlideTwo/SlideTwo';
import SlideThree from './SlideThree/SlideThree';

const Spa = () => {
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            document.documentElement.dataset.scroll = window.scrollY;
        } else {
            document.documentElement.dataset.scroll = 0;
        }
      });

    return (
        <div className='SpaDiv'>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
        </div>
    );
};

export default Spa;