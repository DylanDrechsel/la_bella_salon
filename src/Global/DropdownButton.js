import React, { useState } from 'react';
import MenuImage from '../Assets/transparent_black_menu_button.png'

const DropdownButton = () => {
    return (
        <div className='MenuImageDiv'>
           <img src={MenuImage} height='40' width='40' /> 
        </div>
    );
};

export default DropdownButton;