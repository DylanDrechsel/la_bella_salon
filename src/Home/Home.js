import React from 'react';
import './Home.css'
import SlideOne from './SlideOne/SlideOne'

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