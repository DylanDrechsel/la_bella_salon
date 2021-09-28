import React from 'react';
import LocationPin from '../../Assets/location_pin.png'

const SlideThree = () => {
    return (
        <div className='FooterThreeDiv'>
            <div classname='HoursDiv'>
                <h1 className='FooterThreeHours'> <b> Hours </b> </h1>

                <p className='HoursText'> Sunday & Monday: CLOSED</p>
                <p className='HoursText'> Tuesday: 9:00am - 8:00pm </p>
                <p className='HoursText'> Wednesday: 9:00am - 8:00pm </p>
                <p className='HoursText'> Thursday: 9:00am - 10:00pm </p>
                <p className='HoursText'> Friday: 9:00am - 6:00pm </p>
                <p className='HoursText'> Saturday: 8:00am - 5:00pm</p>
            </div>

            <div className='VisitUsDiv'>
                <h1 className='FooterThreeHours'> <b> Visit Us </b> </h1>
                <img className='LocationPin' src={LocationPin}/>
            </div>
        </div>
    );
};

export default SlideThree;