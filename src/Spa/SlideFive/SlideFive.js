import React from 'react';
import Waxing from './Components/Waxing';
import SkinCare from './Components/SkinCare';
import CustomFacial from './Components/CustomFacial';
import FacialTreatments from './Components/FacialTreatments';
import EnhanceYourExperience from './Components/EnhanceYourExperience';

const SlideFive = () => {
    return (
        <div className='spa-slide-five-div'>
            <div className="spa-service-div">
                <Waxing />
                <SkinCare />
                <CustomFacial />
                <FacialTreatments />
                <EnhanceYourExperience />
            </div>
        </div>
    );
};

export default SlideFive;