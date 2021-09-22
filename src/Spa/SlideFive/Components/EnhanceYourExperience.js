import React from 'react';
import { Row, Col } from 'react-bootstrap'

const EnhanceYourExperience = () => {
    return (
        <div className='CustomFacialDiv'>
            <h1 className='SpaServiceTitleEnhance'> <b> ~Enhance Your Experience~ from...</b> </h1>

            <div className='Prices'>
                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft' style={{ fontSize: '20px'}}>
                            <b> Eye or Lip Collagen </b>
                        </p>
                    </Col>


                    <Col xs={4} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Eyebrows </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $20 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Eyebrow With Lash Tint </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $28 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Aroma Therapy </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $10 </b>
                        </p>
                    </Col>
                </Row> 

            </div>
        </div>
    );
};

export default EnhanceYourExperience;