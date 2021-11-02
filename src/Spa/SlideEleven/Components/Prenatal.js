import React from 'react';
import { Col, Row } from 'react-bootstrap'

const Prenatal = () => {
    return (
        <div>
            <h1 className='spa-service-title-deep-tissue'> <b> ~Prenatal~ </b> </h1>
            <p className='spa-slide-seven-text-swedish-massage'> <b> Promotes Circulation Helps Relieve Back Aches And Fatigue! </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='spa-service-col'>
                            <p className='spa-service-text-left'>
                                <b> 1 Hr. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='spa-service-col'>
                            <p className='spa-service-text-right'>
                                <b> $90 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default Prenatal;