import React, { useEffect } from 'react';
import './Spa.css'
import SlideOne from './SlideOne/SlideOne';

const Spa = () => {
    useEffect(() => {
            document.documentElement.dataset.scroll = 1;
    }, [])

    return (
        <div className='SpaDiv'>
            <SlideOne />
        </div>
    );
};

export default Spa;