import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import Aos from 'aos'
import 'aos/dist/aos.css' 

import image from '../Images/cat2.jpg'

const Ourstory = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
        <Container className='Ourstory-Container'>
            <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='ourstory-commitment' data-aos='fade-right'>
                        <h3>Our Commitment</h3>
                        <hr className='hr-ourstory' />
                        <h5>We strive to provide a safe home for cats and dogs alike. Our fury friends have been abandoned and therefore we are looking for dedicated parents to provide a forever home.</h5>
                    </div>
                </Col>

                <Col sm={12} md={6} lg={6} xl={6}>
                    <Image src={image} className='ourstory-image' />
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='ourstory-story'>
                        <h3>Our Story</h3>
                        <hr className='hr-story' />
                        <h5>We are a non-profit organization that has been operating in the Middle Tennessee Area for 10 years now.
                            <Button className='ourstory-button'>Learn More</Button>
                        </h5>
                    </div>
                </Col>


            </Row>
        </Container>
    )
}

export default Ourstory
