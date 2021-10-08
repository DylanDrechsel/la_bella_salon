import React from 'react';
import { Row, Col } from 'react-bootstrap'

const DescriptionSlide = () => {
    return (
        <div className='DescriptionSlide'>
            
            <Row>
                <Col>
                    <h2 className='DescriptionText'>
                        <b> 
                            At La Bella Salon & Spa we offer everything you need to keep you looking your best. 
                            We'll give you the makeover you desire that's sure to make you the center of attention!
                        </b>
                    </h2>
                </Col>
            </Row>

            <div>
                <Row>
                    <Col>
                        <b className='DescriptionSubText'>
                            <ul className="ulist"> 
                                <li> <l> Cutting & Styling </l> </li>
                                <li> <l> Hair Dying </l> </li>
                                <li> <l> Shampoo </l> </li>
                                <li> <l> Mens Hair </l> </li>
                                <li> <l> Special Events & Kids Partys </l> </li>
                            </ul>
                        </b>  
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default DescriptionSlide;