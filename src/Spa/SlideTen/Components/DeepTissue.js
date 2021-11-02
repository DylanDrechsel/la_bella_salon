import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DeepTissue = () => {
    return (
        <div>
            <h1 className='spa-service-title-deep-tissue'> <b> ~Deep~Tissue~ </b> </h1>
            <p className='spa-slide-seven-text-swedish-massage'> <b> Deep Tissue Massage Reduces Stress And Anxiety To Reduce Muscle Aches! </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='spa-service-col'>
                            <p className='spa-service-text-left'>
                                <b> 1 Hr. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='spa-service-col'>
                            <p className='spa-service-text-right'>
                                <b> $85 </b>
                            </p>
                        </Col>
                    </Row> 

                    <Row>
                        <Col className='spa-service-col'>
                            <p className='spa-service-text-left'>
                                <b> 1 Hr. 15 Min. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='spa-service-col'>
                            <p className='spa-service-text-right'>
                                <b> $100 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default DeepTissue;