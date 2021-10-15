import React, { useEffect } from 'react';
import './Home.css'
import SlideOne from './SlideOne/SlideOne'
import SlideTwo from './SlideTwo/SlideTwo'
import HomeDescriptionSlide from './Components/HomeDescriptionSlide'
import HomePictureSlide from './Components/HomePictureSlide'
import HomeOurServices from './Components/HomeOurServices';
import HomeMapSlide from './Components/HomeMapSlide';
import Footer from '../Footer/Footer'

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
        <div className='home-main-div'>
            <SlideOne />
            <SlideTwo />
            <HomePictureSlide />
            <HomeDescriptionSlide />
            <HomeOurServices />
            <HomeMapSlide />
            <Footer />
        </div>
    );
};

export default Home;