import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Waxing = () => {
    return (
        <div className='WaxingDiv'>
            <h1 className='WaxingTitle'> <b> ~Waxing~ from...</b> </h1>
            
            <div className='WaxingPrices'>
                <Row>
                    <Col className='WaxingCol'>
                        <p className='WaxingTextLeft'>
                            <b> Eye </b>
                        </p>
                    </Col>

                    <Col className='WaxingCol'>
                        <p className='WaxingTextRight'>
                            <b> $16 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='WaxingCol'>
                        <p className='WaxingTextLeft'>
                            <b> Lip or Chin </b>
                        </p>
                    </Col>

                    <Col className='WaxingCol'>
                        <p className='WaxingTextRight'>
                            <b> $14 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='WaxingCol'>
                        <p className='WaxingTextLeft'>
                            <b> Face </b>
                        </p>
                    </Col>

                    <Col className='WaxingCol'>
                        <p className='WaxingTextRight'>
                            <b> $35 </b>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className='WaxingCol'>
                        <p className='WaxingTextLeft'>
                            <b> Bikini </b>
                        </p>
                    </Col>

                    <Col className='WaxingCol'>
                        <p className='WaxingTextRight'>
                            <b> $30 </b>
                        </p>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Waxing;