import React from 'react';
import { Carousel } from 'react-bootstrap'
// import FirstPicture from '../../Assets/Carousel-one.JPG'
import SecondPicture from '../../Assets/carousel-two.JPG'
import ThirdPicture from '../../Assets/carousel-three.JPG'

const CarouselSlide = () => {
    return (
        <div className='carousel-div'>
            <Carousel className='carousel'>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FirstPicture}
                        alt="First slide"
                    />
                </Carousel.Item> */}

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