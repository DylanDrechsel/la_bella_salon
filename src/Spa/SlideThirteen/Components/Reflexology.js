import React from 'react';
import { Col, Row } from 'react-bootstrap'

const Reflexology = () => {
    return (
        <div>
            <h1 className='spa-service-title-deep-tissue'> <b> ~Reflexology~ </b> </h1>
            <p className='spa-slide-seven-text-swedish-massage'> <b> Application Of Pressure To Areas On The Feet Or Hands </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='spa-service-col'>
                            <p className='spa-service-text-left'>
                                <b> 45 Min. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='spa-service-col'>
                            <p className='spa-service-text-right'>
                                <b> $60 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default Reflexology;