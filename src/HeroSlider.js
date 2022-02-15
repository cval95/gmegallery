import React from 'react'
import {Carousel} from 'react-bootstrap'

import Img1 from './img/img1.jpeg';
import Img2 from './img/IMG_2.jpeg';
import Img3 from './img/IMG_3.jpeg';
import Img4 from './img/IMG_4.jpeg';
import Img5 from './img/IMG_5.jpeg';
import Img6 from './img/IMG_6.jpeg';
import Img7 from './img/IMG_7.jpeg';
import Img8 from './img/IMG_8.jpeg';

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider