import React from 'react';
import LocationPin from '../../Assets/location_pin.png'
import EmailIcon from '../../Assets/email_icon.png'
import PhoneIcon from '../../Assets/phone_icon.png'
import { Row, Col } from 'react-bootstrap'

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

                <Row style={{ paddingLeft: '20vw'}}>
                    <Col xs={2}>
                        <img className='LocationPin' src={LocationPin}/>
                    </Col>

                    <Col xs={7}>
                        <p className='VisitUsText'> 1237 US-22, Lebanon, NJ 08833 </p>
                    </Col>
                </Row>

                <Row style={{ paddingLeft: '20vw'}}>
                    <Col xs={2}>
                        <img className='EmailIcon' src={EmailIcon}/>
                    </Col>

                    <Col xs={7}>
                        <p className='VisitUsText'> 1237 US-22, Lebanon, NJ 08833 </p>
                    </Col>
                </Row>

                <Row style={{ paddingLeft: '20vw'}}>
                    <Col xs={2}>
                        <img className='PhoneIcon' src={PhoneIcon}/>
                    </Col>

                    <Col xs={7}>
                        <p className='PhoneText'> 908-236-0866 </p>
                    </Col>
                </Row>

                <div className='FallowUsDiv'>
                    <h1 className='FooterThreeHours'> <b> Follow Us </b> </h1>
                </div>
            </div>
        </div>
    );
};

export default SlideThree;