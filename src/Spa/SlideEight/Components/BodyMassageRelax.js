import React from 'react';
import { Row, Col } from 'react-bootstrap'

const BodyMassageRelax = () => {
    return (
        <div className='MassageDiv'>
            <h1 className='SpaServiceTitle' style={{ fontSize: '52px'}}> <b> ~Body~Massage~Relax~</b> </h1>

            <div className='Prices' style={{ paddingTop: '5px'}}>
                <Row>
                    <Col className='SpaServicesCol' xs={5}>
                        <p className='SpaServicesTextLeft'>
                            <b> Chair Massage </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle' style={{ paddingRight: '35.5px' }}>
                            <b> 15 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row> 
            
                <Row>
                    <Col className='SpaServicesCol' xs={5}>
                        <p className='SpaServicesTextLeft' style={{ fontSize: '14px'}}>
                            <b> Back Neck Shoulder </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle' style={{ paddingRight: '35.5px' }}>
                            <b> 1/2 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $55 </b>
                        </p>
                    </Col>
                </Row> 
            
            </div>
        </div>
    );
};

export default BodyMassageRelax;