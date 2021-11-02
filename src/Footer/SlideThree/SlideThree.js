import React from 'react';
import LocationPin from '../../assets/location_pin.png'
import EmailIcon from '../../assets/email_icon.png'
import PhoneIcon from '../../assets/phone_icon.png'
import InstagramLogo from '../../assets/instagram-transparent-logo-white.png'
import FacebookLogo from '../../assets/facebook_logo-transparent.png'
import { Row, Col } from 'react-bootstrap'

const SlideThree = () => {
    return (
        <div className='footer-three-div'>
            <div classname='hours-div'>
                <h1 className='footer-three-hours'> <b> Hours </b> </h1>

                <p className='hours-text'> Sunday & Monday: CLOSED</p>
                <p className='hours-text'> Tuesday: 9:00am - 6:00pm </p>
                <p className='hours-text'> Wednesday: 9:00am - 8:00pm </p>
                <p className='hours-text'> Thursday: 9:00am - 8:00pm </p>
                <p className='hours-text'> Friday: 9:00am - 5:00pm </p>
                <p className='hours-text'> Saturday: 9:00am - 5:00pm</p>
            </div>

            <div className='visit-us-div'>
                <h1 className='footer-three-hours'> <b> Visit Us </b> </h1>

                <Row style={{ paddingLeft: '20vw'}}>
                    <Col xs={2}>
                        <img className='location-pin' src={LocationPin}/>
                    </Col>

                    <Col xs={7}>
                        <p className='visit-us-text'> 1237 US-22, Lebanon, NJ 08833 </p>
                    </Col>
                </Row>

                <Row style={{ paddingLeft: '20vw'}}>
                    <Col xs={2}>
                        <img className='email-icon' src={EmailIcon}/>
                    </Col>

                    <Col xs={7}>
                        <p className='visit-us-text'> LaBellaSalonandSpaNj@gmail.com </p>
                    </Col>
                </Row>

                <Row style={{ paddingLeft: '20vw'}}>
                    <Col xs={2}>
                        <img className='phone-icon' src={PhoneIcon}/>
                    </Col>

                    <Col xs={7}>
                        <p className='phone-text'> 908-236-0866 </p>
                    </Col>
                </Row>

                <div className='fallow-us-div'>
                    <h1 className='footer-three-hours'> <b> Follow Us </b> </h1>

                    <Row style={{ paddingLeft: '22vw'}}>
                        <Col xs={2}>
                            <a href=''>
                                <img className='instagram-icon' src={InstagramLogo}/>
                            </a>
                        </Col>

                        <Col xs={9}>
                            <a href='https://www.facebook.com/labellasalonandspa/'>
                                <img className='facebook-icon' src={FacebookLogo}/>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default SlideThree;