import React from 'react';
import Waxing from './Components/Waxing';
import SkinCare from './Components/SkinCare';

const SlideFive = () => {
    return (
        <div className='SpaSlideFiveDiv'>
            <div className="SpaServiceDiv">
                <Waxing />
                <SkinCare />
            </div>
        </div>
    );
};

export default SlideFive;