import React from 'react';
import { Row, Col } from 'react-bootstrap'

const CustomFacial = () => {
    return (
        <div className='CustomFacialDiv'>
            <h1 className='SpaServiceTitle' /* style={{ fontSize: '52px'}} */> <b> ~Custom Facial~ from...</b> </h1>

            <h3 className='SpaServiceSubTitle'> <b> ~~Tailored to your Skin Type~~ <br /> ~Sensitive~Firm~Tone~Hydrating~ <br /> ~Anti Aging~Blemish~Microderm~ </b> </h3>

            <div className='Prices'>
                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeftCustomFacials'>
                            <b> Teen Facial </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddleCustomFacials'>
                            <b> 45 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightCustomFacials'>
                            <b> $78 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeftCustomFacials'>
                            <b> Back Facial </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddleCustomFacials'>
                            <b> 45 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightCustomFacials'>
                            <b> $80 </b>
                        </p>
                    </Col>
                </Row> 
            </div>

        </div>
    );
};

export default CustomFacial;