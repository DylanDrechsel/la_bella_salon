import React, { useEffect } from 'react';
import './Salon.css'
import './../Spa/Spa.css'
import Footer from '../Footer/Footer';
import LandingSlide from './Components/LandingSlide';
import DescriptionSlide from './Components/DescriptionSlide';
import CarouselSlide from './Components/CarouselSlide';
import MenuSlide from './Components/MenuSlide';

const Salon = () => {
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
        <div className='SalonDiv'>
            <LandingSlide />
            <DescriptionSlide />
            <CarouselSlide />
            <MenuSlide />
            <Footer />
        </div>
    );
};

export default Salon;