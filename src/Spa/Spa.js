import React, { useEffect } from 'react';
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
import SlideTen from './SlideTen/SlideTen';
import SlideEleven from './SlideEleven/SlideEleven';
import SlideTwelve from './SlideTwelve/SlideTwelve';
import SlideThirteen from './SlideThirteen/SlideThirteen';
import Footer from '../Footer/Footer';

const Spa = () => {
    useEffect(() => {
        document.documentElement.dataset.scroll = 0;
    }, [])

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
            <SlideTen />
            <SlideEleven />
            <SlideTwelve />
            <SlideThirteen />
            <Footer />
        </div>
    );
};

export default Spa;