import React from 'react';
import { Row, Col } from 'react-bootstrap'

const EnhanceYourExperience = () => {
    return (
        <div className='custom-facial-div'>
            <h1 className='spa-service-title-enhance'> <b> ~Enhance Your Experience~ from...</b> </h1>

            <div className='prices'>
                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left' >
                            <b> Eye or Lip Collagen </b>
                        </p>
                    </Col>


                    <Col xs={4} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left'>
                            <b> Eyebrow Tint </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left'>
                            <b> Eyebrow with Lash Tint </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $28 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left'>
                            <b> Aroma Therapy </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $10 </b>
                        </p>
                    </Col>
                </Row> 

            </div>
        </div>
    );
};

export default EnhanceYourExperience;