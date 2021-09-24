import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Swedish = () => {
    return (
        <div>
            <h1 className='SpaServiceTitleSwedishMassage'> <b> ~Swedish~Massage~ </b> </h1>
            <p className='SpaSildeSevenTextSwedishMassage'> <b> Swedish Massage Is A Light To Medium Pressure, A Gentle Touch To Relax!   </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='SpaServicesCol'>
                            <p className='SpaServicesTextLeft'>
                                <b> 1 Hr. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='SpaServicesCol'>
                            <p className='SpaServicesTextRight'>
                                <b> $75 </b>
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
                                <b> $95 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default Swedish;