import React from 'react';
import { Carousel } from 'react-bootstrap'
import MassageRoom from '../../Assets/massage_room.jpg'
import SalonFloor from '../../Assets/salon_floor.jpg'
import WaitingArea from '../../Assets/waiting_area.jpg'

const LandingCarousel = () => {
    return (
        <div className='LandingCarouselDiv'>
            <Carousel>
                <Carousel.Item>
                    <img className='CarouselImage'
                    className="d-block w-100"
                    src={MassageRoom}
                    alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Massage Room</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='CarouselImage'
                    className="d-block w-100"
                    src={SalonFloor}
                    alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Salon Floor</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='CarouselImage'
                    className="d-block w-100"
                    src={WaitingArea}
                    alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Waiting Area</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default LandingCarousel;