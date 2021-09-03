import './LandingPage.css'
import React from 'react';
import LandingCarousel from './Components/LandingCarousel';
import Title from './Components/Title'
import EnterButton from './Components/EnterButton'

const LandingPage = () => {
    return (
        <div>
            <Title />
            <LandingCarousel />
            <EnterButton />
        </div>
    );
};

export default LandingPage;