import React from 'react';
import { Row, Col } from 'react-bootstrap'

const FacialTreatments = () => {
    return (
        <div className='CustomFacialDiv'>
            <h1 className='SpaServiceTitleFacialTreatment'> <b> ~Facial Treatment~ from...</b> </h1>

            <div className='Prices'>
                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeftFacialTreatment'>
                            <b> Collagen </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddleFacialTreatment'>
                            <b> 1 Hr. 15 Min. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightFacialTreatment'>
                            <b> $135 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeftFacialTreatment'>
                            <b> Glycolic Peel </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddleFacialTreatment' style={{ paddingRight: '35.5px' }}>
                            <b> 1/2 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightFacialTreatment'>
                            <b> $65 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeftFacialTreatment'>
                            <b> Glycolic Facial </b> <br />
                            <b style={{ fontSize: '12px' }}> ~~with Peel~~ </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddleFacialTreatment' style={{ paddingRight: '35.5px' }}>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightFacialTreatment'>
                            <b> $135 </b>
                        </p>
                    </Col>
                </Row> 

                <Row>
                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextLeftFacialTreatment'>
                            <b> Oxygen Facial </b>
                        </p>
                    </Col>

                    <Col className='SpaServicesCol'>
                        <p className='SpaServicesTextMiddleFacialTreatment' style={{ paddingRight: '35.5px' }}>
                            <b> 1 Hr. </b>
                        </p>
                    </Col>

                    <Col xs={3} className='SpaServicesCol'>
                        <p className='SpaServicesTextRightFacialTreatment'>
                            <b> $110 </b>
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FacialTreatments;