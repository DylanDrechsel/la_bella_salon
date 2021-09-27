import React from 'react';
import { Col, Row } from 'react-bootstrap'

const Prenatal = () => {
    return (
        <div>
            <h1 className='SpaServiceTitleDeepTissue'> <b> ~Prenatal~ </b> </h1>
            <p className='SpaSildeSevenTextSwedishMassage'> <b> Promotes Circulation Helps Relieve Back Aches And Fatigue! </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='SpaServicesCol'>
                            <p className='SpaServicesTextLeft'>
                                <b> 1 Hr. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='SpaServicesCol'>
                            <p className='SpaServicesTextRight'>
                                <b> $90 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default Prenatal;