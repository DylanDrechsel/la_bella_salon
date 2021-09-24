import React from 'react';
import { Row, Col } from 'react-bootstrap'

const SlideSeven = () => {
    return (
        <div className='SpaSlideSevenDiv'>
            <div className='UltimateSpaFacialDiv'>
                <h1 className='SpaSildeSevenTitle'> <b> Ultimate Spa Facial </b> </h1>
                <p className='SpaSildeSevenText'> <b> Relax & Enjoy A Custom Facial with A Back ~~ Neck ~~ Shoulder Rub  </b> </p>

                <Row>
                    <Col xs={7}>
                        <p className='SpaSildeSevenInfoText'> <b> ~1 Hr. 15 Min.~ </b> </p>
                    </Col>

                    <Col xs={3}>
                        <p className='SpaSildeSevenInfoText' /* style={{ paddingLeft: '150px'}} */> <b> $125 </b> </p>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default SlideSeven;