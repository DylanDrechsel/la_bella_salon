import React from 'react';
import { Col, Row } from 'react-bootstrap'

const Reflexology = () => {
    return (
        <div>
            <h1 className='SpaServiceTitleDeepTissue'> <b> ~Reflexology~ </b> </h1>
            <p className='SpaSildeSevenTextSwedishMassage'> <b> Application Of Pressure To Areas On The Feet Or Hands </b> </p>

                <div className='Prices' style={{ paddingTop: '5px'}}>
                    <Row>
                        <Col className='SpaServicesCol'>
                            <p className='SpaServicesTextLeft'>
                                <b> 45 Min. </b>
                            </p>
                        </Col>

                        <Col xs={3} className='SpaServicesCol'>
                            <p className='SpaServicesTextRight'>
                                <b> $60 </b>
                            </p>
                        </Col>
                    </Row> 
                </div>
        </div>
    );
};

export default Reflexology;