import React from 'react';
import './Spa.css'
import SlideOne from './SlideOne/SlideOne';
import SlideTwo from './SlideTwo/SlideTwo';
import SlideThree from './SlideThree/SlideThree';
import SlideFour from './SlideFour/SlideFour';
import SlideFive from './SlideFive/SlideFive';
import SlideSix from './SlideSix/SlideSix';
import SlideSeven from './SlideSeven/SlideSeven';
import SlideEight from './SlideEight/SlideEight';
import SlideNine from './SlideNine/SlideNine';

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
            <SlideFour />
            <SlideFive />
            <SlideSix />
            <SlideSeven />
            <SlideEight />
            <SlideNine />
        </div>
    );
};

export default Spa;