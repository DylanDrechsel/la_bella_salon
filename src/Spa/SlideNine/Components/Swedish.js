import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Swedish = () => {
    return (
        <div>
            <h1 className='spa-service-title-swedish-massage'> <b> ~Swedish~Massage~ </b> </h1>
            <p className='spa-slide-seven-text-swedish-massage'> <b> Swedish Massage Is A Light To Medium Pressure, A Gentle Touch To Relax!   </b> </p>

                <div className='prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='spa-service-col'>
                            <p className='spa-service-text-left'>
                                <b> 1 Hr. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='spa-service-col'>
                            <p className='spa-service-text-right'>
                                <b> $75 </b>
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
                                <b> $95 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default Swedish;