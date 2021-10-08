import React, { useEffect } from 'react';
import './SalonEtiquette.css'
import Title from './Components/Title'
import Arrival from './Components/Arrival';
import Cancellations from './Components/Cancellations';
import Children from './Components/Children';
import CellPhones from './Components/CellPhones';
import GiftCertificates from './Components/GiftCertificates';

const SalonEtiquette = () => {
    useEffect(() => {
        setTimeout(() => {
            document.documentElement.dataset.scroll = 1;
        }, 250)
    }, [])


    document.addEventListener("scroll", () => {
        if (window.scrollY) {
            document.documentElement.dataset.scroll = 1000;
            console.log(window.scrollY)
        } else  {
            document.documentElement.dataset.scroll = 1000;
        }
      });
    
    return (
        <div className='EtiquetteMainDiv'>
            <Title />
            
            <div className='SalonEtiquetteDiv'>
                <Arrival />
                <Cancellations />
                <Children />
                <CellPhones />
                <GiftCertificates />
            </div>
        </div>
    );
};

export default SalonEtiquette;