import React from 'react';
import { Carousel } from 'react-bootstrap'
import FirstPicture from '../../assets/carousel-one.jpg'
import SecondPicture from '../../assets/carousel-two.jpg'
import ThirdPicture from '../../assets/carousel-three.jpg'

const CarouselSlide = () => {
    return (
        <div className='carousel-div'>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={FirstPicture}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={SecondPicture}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={ThirdPicture}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default CarouselSlide;