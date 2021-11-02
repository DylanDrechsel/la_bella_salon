import React from 'react';
import { Row, Col } from 'react-bootstrap'

const SkinCare = () => {
    return (
        <div className='skin-care-div'>
            <h1 className='spa-service-title'> <b> ~Skin Care~</b> </h1>

            <div className='Prices'>
                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left'>
                            <b> Mini Facial </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col'>
                        <p className='spa-service-text-middle'>
                            <b> 1/2 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $58 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left'>
                            <b> Euopean </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col'>
                        <p className='spa-service-text-middle'>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $85 </b>
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SkinCare;