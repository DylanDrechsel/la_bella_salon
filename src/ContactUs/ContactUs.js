import React, { useEffect } from 'react';
import './contactUs.css'
import MapSlide from '../Home/Components/HomeMapSlide'
import Footer from '../Footer/Footer';

const ContactUs = () => {
    useEffect(() => {
        setTimeout(() => {
            document.documentElement.dataset.scroll = 10;
        }, 250)
    }, [])

    window.scrollY = 1;

    return (
        <div className='contact-us-main-div'>
            <div className='contact-us-title'>
                <h1 className='contact-us-title-text'> <b> Contact Us </b> </h1>
            </div>

            <MapSlide />
            <Footer />
        </div>
    );
};

export default ContactUs;