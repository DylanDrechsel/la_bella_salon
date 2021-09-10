import React  from 'react';
import MenuImage from '../Assets/transparent_black_menu_button.png'

const DropdownButton = ({ handleMenuShow }) => {
    return (
        <div className='MenuImageDiv' onClick={handleMenuShow}>
           <img src={MenuImage} height='40' width='40' /> 
        </div>
    );
};

export default DropdownButton;