import React from 'react';
import './Salon.css'
import LandingSlide from './Components/LandingSlide';

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
        </div>
    );
};

export default Salon;