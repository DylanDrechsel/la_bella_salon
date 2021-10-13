import React, { useEffect } from 'react';
import './Home.css'
import SlideOne from './SlideOne/SlideOne'
import SlideTwo from './SlideTwo/SlideTwo'
import HomeDescriptionSlide from './Components/HomeDescriptionSlide'

document.documentElement.dataset.scroll = 0;

const Home = () => {
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            document.documentElement.dataset.scroll = window.scrollY;
        } else {
            document.documentElement.dataset.scroll = 0;
        }
      });

    return (
        <div>
            <SlideOne />
            <SlideTwo />
            <HomeDescriptionSlide />
        </div>
    );
};

export default Home;