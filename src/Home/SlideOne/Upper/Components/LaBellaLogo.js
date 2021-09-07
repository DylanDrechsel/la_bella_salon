import React from 'react';
import Logo from '../../../../Assets/transparent-la-bella-logo__575x600.png'

const LaBellaLogo = () => {
    return (
        <div className='LaBellaLogoDiv'>
            <img className='LaBellaLogo' src={Logo} alt="La Bella Salon & Spa" width="575px" height="600"></img>
        </div>
    );
};

export default LaBellaLogo;