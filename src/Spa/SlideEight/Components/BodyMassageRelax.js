import React from 'react';
import { Row, Col } from 'react-bootstrap'

const BodyMassageRelax = () => {
    return (
        <div className='massage-div'>
            <h1 className='spa-service-title-body-massage'> <b> ~Body~Massage~Relax~</b> </h1>

            <div className='Prices' style={{ paddingTop: '5px'}}>
                <Row>
                    <Col className='spa-service-col' xs={5}>
                        <p className='spa-service-text-left-body-massage'>
                            <b> Chair Massage </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col' xs={3}>
                        <p className='spa-service-text-middle-body-massage' /* style={{ paddingRight: '35.5px' }} */>
                            <b> 15 Min. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='spa-service-col'>
                        <p className='spa-service-text-right-body-massage'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row> 
            
                <Row>
                    <Col className='spa-service-col' xs={5}>
                        <p className='spa-service-text-left-body-massage' >
                            <b> Back Neck Shoulder </b>
                        </p>
                    </Col>

                    <Col className='spa-service-col' xs={4}>
                        <p className='spa-service-text-middle' style={{ paddingRight: '35.5px' }}>
                            <b> <span className='body-massage-middle-text-change'> 1/2 Hr. </span>  </b>
                        </p>
                    </Col>

                    <Col xs={3} className='spa-service-col'>
                        <p className='spa-service-text-right'>
                            <b> $55 </b>
                        </p>
                    </Col>
                </Row> 
            
            </div>
        </div>
    );
};

export default BodyMassageRelax;