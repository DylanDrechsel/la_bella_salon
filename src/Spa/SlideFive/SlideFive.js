import React from 'react';
import Waxing from './Components/Waxing';
import SkinCare from './Components/SkinCare';
import CustomFacial from './Components/CustomFacial';

const SlideFive = () => {
    return (
        <div className='SpaSlideFiveDiv'>
            <div className="SpaServiceDiv">
                <Waxing />
                <SkinCare />
                <CustomFacial />
            </div>
        </div>
    );
};

export default SlideFive;