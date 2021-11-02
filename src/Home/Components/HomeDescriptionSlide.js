import React from 'react';
import contact-button from '../../Footer/Components/contact-button';
import TeamButton from '../../Footer/Components/TeamButton';

const HomeDescriptionSlide = () => {
    return (
        <div className='home-description-slide'>
            <div>
                <h1 className='description-title'>
                    It's All About Beauty At La Bella Salon & Spa!
                </h1>

                <p className='description-text'>
                    La Bella Salon & Spa changed ownership in 2021. As the new owners, we strive to bring something fresh, new, and exciting to Lebanon! <br /> <br />
                    Our stylists specialize in making you feel good about yourself. From the moment you walk in the door until you leave its all about you and what you need to feel your absolute best. <br /> <br />
                    At La Bella we are passionate about beauty for everyone! We work hard to give every client the absolute best care and are always looking for ways to provide more services to our clients. We welcome any suggestions you might have, so please speak up and let us know what you think.
                </p>
            </div>


            <TeamButton />
            <contact-button />
        </div>
    );
};

export default HomeDescriptionSlide;