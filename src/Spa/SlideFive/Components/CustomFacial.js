import React from 'react';
import { Row, Col } from 'react-bootstrap'

const CustomFacial = () => {
    return (
        <div className='custom-facial-div'>
            <h1 className='spa-service-title spa-service-title-custom-facial' /* style={{ fontSize: '52px'}} */> <b> ~Custom Facial~ from...</b> </h1>

            <h3 className='spa-service-sub-title'> <b> ~~Tailored to your Skin Type~~ <br /> ~Sensitive~Firm~Tone~Hydrating~ <br /> ~Anti Aging~Blemish~Microderm~ </b> </h3>

            <div className='prices'>
                <Row>
                    <Col className='spa-services-col'>
                        <p className='spa-service-text-left-custom-facials'>
                            <b> Teen Facial </b>
                        </p>
                    </Col>

                    <Col className='spa-services-col'>
                        <p className='spa-service-text-middle-custom-facials'>
                            <b> 45 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-services-col'>
                        <p className='spa-service-text-right-custom-facials'>
                            <b> $78 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='spa-services-col'>
                        <p className='spa-service-text-left-custom-facials'>
                            <b> Back Facial </b>
                        </p>
                    </Col>

                    <Col className='spa-services-col'>
                        <p className='spa-service-text-middle-custom-facials'>
                            <b> 45 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-services-col'>
                        <p className='spa-service-text-right-custom-facials'>
                            <b> $80 </b>
                        </p>
                    </Col>
                </Row> 
            </div>

        </div>
    );
};

export default CustomFacial;