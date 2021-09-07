import React from 'react';
import './SalonEtiquette.css'
import Title from './Components/Title'
import Arrival from './Components/Arrival';

const SalonEtiquette = () => {
    return (
        <div className='EtiquetteMainDiv'>
            <Title />
            
            <div className='SalonEtiquetteDiv'>
                <Arrival />
            </div>
        </div>
    );
};

export default SalonEtiquette;