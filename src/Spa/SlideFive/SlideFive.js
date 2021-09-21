import React from 'react';
import Waxing from './Components/Waxing';
import SkinCare from './Components/SkinCare';
import CustomFacial from './Components/CustomFacial';
import FacialTreatments from './Components/FacialTreatments';

const SlideFive = () => {
    return (
        <div className='SpaSlideFiveDiv'>
            <div className="SpaServiceDiv">
                <Waxing />
                <SkinCare />
                <CustomFacial />
                <FacialTreatments />
            </div>
        </div>
    );
};

export default SlideFive;