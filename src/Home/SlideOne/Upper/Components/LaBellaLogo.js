import React from 'react';
import Logo from '../../../../Assets/transparent-la-bella-logo__575x600.png'
import ContactButton from '../../../../Footer/Components/ContactButton';

const LaBellaLogo = () => {
    return (
        <div className='LaBellaLogoDiv'>
            <img className='LaBellaLogo' src={Logo} alt="La Bella Salon and Spa" width="575px" height="600px"></img>

            <div className='home-contact-button'>
                <ContactButton />
            </div>
        </div>
    );
};

export default LaBellaLogo;