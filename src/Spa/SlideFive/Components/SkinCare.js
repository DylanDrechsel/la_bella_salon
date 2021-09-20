import React from 'react';
import { Row, Col } from 'react-bootstrap'

const SkinCare = () => {
    return (
        <div className='SkinCareDiv'>
            <h1 className='SpaServiceTitle'> <b> ~Skin Care~ from...</b> </h1>

            <div className='Prices'>
                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Mini Facial </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle'>
                            <b> 1/2 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $18 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Euopean </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle'>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $85 </b>
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SkinCare;