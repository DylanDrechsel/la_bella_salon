import React, { useEffect } from 'react';
import MenuImage from '../Assets/transparent_black_menu_button.png'

let yPosition = 0

const DropdownButton = ({ handleMenuShow }) => {

    document.addEventListener("scroll", () => {
        yPosition = window.scrollY
      });
    // useEffect(() => {
    //     const scrollY = window.scrollY
    //     console.log(scrollY)
    // }, [])


    return (
        <div /* className={yPosition > 50 ? 'MenuImageDiv' : null } */ className='MenuImageDiv' onClick={handleMenuShow}>
           <img src={MenuImage} height='40' width='40' /> 
        </div>
    );
};

export default DropdownButton;