import React from 'react';
import { Col, Row } from 'react-bootstrap'

const HotStone = () => {
    return (
        <div>
            <h1 className='spa-service-title-deep-tissue'> <b> ~Hot~Stone~ </b> </h1>
            <p className='spa-slide-seven-text-swedish-massage'> <b> Heated Basalt Lava Stones To Loosen Tight Muscles! </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='spa-service-col'>
                            <p className='spa-service-text-left'>
                                <b> 1 Hr. 15 Min. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='spa-service-col'>
                            <p className='spa-service-text-right'>
                                <b> $110 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default HotStone;