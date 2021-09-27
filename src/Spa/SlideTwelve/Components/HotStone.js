import React from 'react';
import { Col, Row } from 'react-bootstrap'

const HotStone = () => {
    return (
        <div>
            <h1 className='SpaServiceTitleDeepTissue'> <b> ~Hot~Stone~ </b> </h1>
            <p className='SpaSildeSevenTextSwedishMassage'> <b> Heated Basalt Lava Stones To Loosen Tight Muscles! </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='SpaServicesCol'>
                            <p className='SpaServicesTextLeft'>
                                <b> 1 Hr. 15 Min. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='SpaServicesCol'>
                            <p className='SpaServicesTextRight'>
                                <b> $110 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default HotStone;