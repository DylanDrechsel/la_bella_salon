import React from 'react';
import { Row, Col } from 'react-bootstrap'

const FacialTreatments = () => {
    return (
        <div className='custom-facial-div'>
            <h1 className='spa-service-title-facial-treatment'> <b> ~Facial Treatment~ from...</b> </h1>

            <div className='prices'>
                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left-facial-treatment'>
                            <b> Collagen </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col'>
                        <p className='spa-service-text-middle-facial-treatment'>
                            <b> 1 Hr. 15 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right-facial-treatment'>
                            <b> $135 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left-facial-treatment'>
                            <b> Glycolic Peel </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col'>
                        <p className='spa-service-text-middle-facial-treatment' style={{ paddingRight: '35.5px' }}>
                            <b> 1/2 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right-facial-treatment'>
                            <b> $65 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left-facial-treatment'>
                            <b> Glycolic Facial </b> <br />
                            <b style={{ fontSize: '12px' }}> ~~with Peel~~ </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col'>
                        <p className='spa-service-text-middle-facial-treatment' style={{ paddingRight: '35.5px' }}>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right-facial-treatment'>
                            <b> $135 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='spa-service-col'>
                        <p className='spa-service-text-left-facial-treatment'>
                            <b> Oxygen Facial </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col'>
                        <p className='spa-service-text-middle-facial-treatment' style={{ paddingRight: '35.5px' }}>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right-facial-treatment'>
                            <b> $110 </b>
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FacialTreatments;