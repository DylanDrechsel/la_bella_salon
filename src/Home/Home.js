import React, { useEffect } from 'react';
import './Home.css'
import SlideOne from './SlideOne/SlideOne'
import SlideTwo from './SlideTwo/SlideTwo'

document.documentElement.dataset.scroll = 0;

const Home = () => {
    document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
      });

    return (
        <div>
            <SlideOne />
            <SlideTwo />
        </div>
    );
};

export default Home;