import React, { useEffect } from 'react';
import './Home.css'
import SlideOne from './SlideOne/SlideOne'

document.documentElement.dataset.scroll = 0;

const Home = () => {
    document.addEventListener("scroll", () => {
        document.documentElement.dataset.scroll = window.scrollY;
      });

    return (
        <div>
            <SlideOne />
        </div>
    );
};

export default Home;