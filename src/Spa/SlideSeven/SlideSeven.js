import React from 'react';
import { Row, Col } from 'react-bootstrap'

const SlideSeven = () => {
    return (
        <div className='spa-slide-seven-div'>
            <div className='ultimate-spa-facial-div'>
                <h1 className='spa-slide-seven-title'> <b> Ultimate Spa Facial </b> </h1>
                <p className='spa-slide-seven-text'> <b> Relax & Enjoy A Custom Facial with A Back ~~ Neck ~~ Shoulder Rub  </b> </p>

                <Row>
                    <Col xs={7}>
                        <p className='spa-slide-seven-info-text'> <b> ~1 Hr. 15 Min.~ </b> </p>
                    </Col>

                    <Col xs={3}>
                        <p className='spa-slide-seven-info-text'> <b> $125 </b> </p>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default SlideSeven;