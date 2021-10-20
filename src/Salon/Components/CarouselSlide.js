import React from 'react';
import { Carousel } from 'react-bootstrap'
import FirstPicture from './../../assets/carousel-one.jpg'
import SecondPicture from './../../assets/carousel-two.jpg'
import ThirdPicture from './../../assets/carousel-three.jpg'

const CarouselSlide = () => {
    return (
        <div className='carousel-div'>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FirstPicture}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SecondPicture}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ThirdPicture}
                        alt="First slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default CarouselSlide;