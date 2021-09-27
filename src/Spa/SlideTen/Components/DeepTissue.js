import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DeepTissue = () => {
    return (
        <div>
            <h1 className='SpaServiceTitleDeepTissue'> <b> ~Deep~Tissue~ </b> </h1>
            <p className='SpaSildeSevenTextSwedishMassage'> <b> Deep Tissue Massage Reduces Stress And Anxiety To Reduce Muscle Aches! </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='SpaServicesCol'>
                            <p className='SpaServicesTextLeft'>
                                <b> 1 Hr. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='SpaServicesCol'>
                            <p className='SpaServicesTextRight'>
                                <b> $85 </b>
                            </p>
                        </Col>
                    </Row> 

                    <Row>
                        <Col className='SpaServicesCol'>
                            <p className='SpaServicesTextLeft'>
                                <b> 1 Hr. 15 Min. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='SpaServicesCol'>
                            <p className='SpaServicesTextRight'>
                                <b> $100 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default DeepTissue;