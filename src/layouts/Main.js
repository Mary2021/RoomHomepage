import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftPic from './../images/image-about-dark.jpg'
import RightPic from './../images/image-about-light.jpg'

const Main = () => {
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

    if (window.innerWidth >= 376) {
        return (    
            <Container fluid className="MainContainer">
                <Row>
                    <Col>
                        <img
                        className="d-block w-100"
                        src={LeftPic}
                        alt="Third slide"
                        />
                    </Col>
                    <Col lg={5}>
                        <div className="AboutContainer">
                            <h2>About our furniture</h2>
                            <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                        </div>
                    </Col>
                    <Col>
                        <img
                        className="d-block w-100"
                        src={RightPic}
                        alt="Third slide"
                        />
                    </Col>
                    </Row>
                </Container>
        )
    } else {
        return (
            <div>
                <img
                    className="d-block w-100"
                    src={LeftPic}
                    alt="Third slide"
                />
                <div className="AboutContainer">
                    <h2>About our furniture</h2>
                    <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <img
                    className="d-block w-100"
                    src={RightPic}
                    alt="Third slide"
                />
            </div>
        )
    }
}

export default Main