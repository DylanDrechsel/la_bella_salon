import React from 'react';
import './SalonEtiquette.css'
import Title from './Components/Title'
import Arrival from './Components/Arrival';
import Cancellations from './Components/Cancellations';

const SalonEtiquette = () => {
    return (
        <div className='EtiquetteMainDiv'>
            <Title />
            
            <div className='SalonEtiquetteDiv'>
                <Arrival />
                <Cancellations />
            </div>
        </div>
    );
};

export default SalonEtiquette;