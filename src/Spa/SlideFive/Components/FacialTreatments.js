import React from 'react';
import { Row, Col } from 'react-bootstrap'

const FacialTreatments = () => {
    return (
        <div className='CustomFacialDiv'>
            <h1 className='SpaServiceTitle' style={{ fontSize: '48px'}}> <b> ~Facial Treatment~ from...</b> </h1>

            <div className='Prices'>
                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Collagen </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle'>
                            <b> 1 Hr. 15 Min. </b>
                        </p>
                    </Col>

                    <Col xs={4} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $135 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft'>
                            <b> Glycolic Peel </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle' style={{ paddingRight: '35.5px' }}>
                            <b> 1/2 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $65 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft' style={{ fontSize: '18px'}}>
                            <b> Glycolic Facial </b> <br />
                            <b style={{ fontSize: '12px' }}> ~~with Peel~~ </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle' style={{ paddingRight: '35.5px' }}>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRight'>
                            <b> $135 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeft' style={{ fontSize: '18px'}}>
                            <b> Oxygen Facial </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddle' style={{ paddingRight: '35.5px' }}>
                            <b> 1 Hr. </b>
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

export default FacialTreatments;