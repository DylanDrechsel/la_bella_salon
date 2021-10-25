import React from 'react';
import { Row, Col } from 'react-bootstrap'

const BodyMassageRelax = () => {
    return (
        <div className='MassageDiv'>
            <h1 className='SpaServiceTitleBodyMassage'> <b> ~Body~Massage~Relax~</b> </h1>

            <div className='Prices' style={{ paddingTop: '5px'}}>
                <Row>
                    <Col className='SpaServicesCol' xs={5}>
                        <p className='SpaServicesTextLeftBodyMassage'>
                            <b> Chair Massage </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol' xs={3}>
                        <p className='SpaServicesTextMiddleBodyMassage' /* style={{ paddingRight: '35.5px' }} */>
                            <b> 15 Min. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightBodyMassage'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row> 
            
                <Row>
                    <Col className='SpaServicesCol' xs={5}>
                        <p className='SpaServicesTextLeftBodyMassage' >
                            <b> Back Neck Shoulder </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol' xs={4}>
                        <p className='SpaServicesTextMiddle' style={{ paddingRight: '35.5px' }}>
                            <b> <span className='body-massage-middle-text-change'> 1/2 Hr. </span>  </b>
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