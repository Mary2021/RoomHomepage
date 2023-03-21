import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlidePic1 from './../images/desktop-image-hero-1.jpg'
import SlidePic2 from './../images/desktop-image-hero-2.jpg'
import SlidePic3 from './../images/desktop-image-hero-3.jpg'
import MobileSlidePic1 from './../images/mobile-image-hero-1.jpg'
import MobileSlidePic2 from './../images/mobile-image-hero-2.jpg'
import MobileSlidePic3 from './../images/mobile-image-hero-3.jpg'
import AngleLeft from './../images/icon-angle-left.svg'
import AngleRight from './../images/icon-angle-right.svg'
import SliderCard from "../components/SliderCard";

const Hero = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    let [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    useEffect(() => {
    function handleResize() {
        setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
        }) 
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
    })

    const directionButtons = (direction) => {
        return (
          <span
            aria-hidden="true"
            className={direction === "Next" ? "button-next" : "button-prev"}
          >
            {direction}
          </span>
        );
      };

    if (window.innerWidth >= 376) {
        return (    
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} prevIcon={directionButtons(<button className='AngleLeft'><img src={AngleLeft} alt={'angleToLeft'}></img></button>)} nextIcon={directionButtons(<button className='AngleRight'><img src={AngleRight} alt={'angleToRight'}></img></button>)} >
                <Carousel.Item>
                    <Container fluid className="SliderContainer">
                        <Row>
                            <Col lg={7} className='RemoveRightPadding'>
                                <img
                                className="d-block w-100"
                                src={SlidePic1}
                                alt="First slide"
                                />
                            </Col>
                            <Col lg={5} className='RemoveLeftPadding'>
                                <SliderCard heading={'Discover innovative ways to decorate'} text={"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."} />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="SliderContainer">
                        <Row>
                            <Col lg={7} className='RemoveRightPadding'>        
                                <img 
                                    className="d-block w-100"
                                    src={SlidePic2}
                                    alt="Second slide"
                                />
                            </Col>
                            <Col lg={5} className='RemoveLeftPadding'>
                                <SliderCard heading={'We are available all across the globe'} text={"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we´re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."} />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container fluid className="SliderContainer">
                        <Row>
                            <Col lg={7} className='RemoveRightPadding'>
                                <img
                                className="d-block w-100"
                                src={SlidePic3}
                                alt="Third slide"
                                />
                            </Col>
                            <Col lg={5} className='RemoveLeftPadding'>
                                <SliderCard heading={'Manufactured with the best materials'} text={"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."} />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        )
    } else { 
        return(
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} prevIcon={directionButtons(<button className='AngleLeft'><img src={AngleLeft} alt={'angleToLeft'} ></img></button>)} nextIcon={directionButtons(<button className='AngleRight'><img src={AngleRight} alt={'angleToRight'}></img></button>)} >
                <Carousel.Item>
                    <Container fluid className="SliderContainer">
                        <img
                        className="d-block w-100"
                        src={MobileSlidePic1}
                        alt="First slide"
                        />
                        <SliderCard heading={'Discover innovative ways to decorate'} text={"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."} />
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MobileSlidePic2}
                    alt="Second slide"
                    />
                    <SliderCard heading={'We are available all across the globe'} text={"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we´re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."} />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MobileSlidePic3}
                    alt="Third slide"
                    />
                    <SliderCard heading={'Manufactured with the best materials'} text={"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."} />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Hero