import React from 'react';
import './Salon.css'
import Footer from '../Footer/Footer';
import LandingSlide from './Components/LandingSlide';
import DescriptionSlide from './Components/DescriptionSlide';
import CarouselSlide from './Components/CarouselSlide';

const Salon = () => {
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            document.documentElement.dataset.scroll = window.scrollY;
        } else {
            document.documentElement.dataset.scroll = 0;
        }
      });

    return (
        <div className='SalonDiv'>
            <LandingSlide />
            <DescriptionSlide />
            <CarouselSlide />
            <Footer />
        </div>
    );
};

export default Salon;