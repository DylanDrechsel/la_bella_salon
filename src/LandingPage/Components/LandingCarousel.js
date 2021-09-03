import React from 'react';
import { Carousel } from 'react-bootstrap'
import MassageRoom from '../../assets/massage_room.jpg'

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default LandingCarousel;