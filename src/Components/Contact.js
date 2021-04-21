import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaLocationArrow, FaFax } from 'react-icons/fa'
import { FiPhoneForwarded } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'

import image from '../Images/contact1.jpg'

const Contact = () => {
    return (
        <Container className='Contact-Container'>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6}>
                    <Image src={image} className='contact-image' />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                    <div className='contact-section'>
                        <div className='contact-header'>
                            <h1>Contact Us</h1>
                            <hr className='hr-contact' />
                        </div>

                        <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='contact-location'>
                                <FaLocationArrow className='contact-arrow' />
                                <h6>2020 Murfreesboro Road, Nashville, Tennessee, 37217</h6>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='contact-location'>
                                <FiPhoneForwarded className='contact-arrow' />
                                <h6>2020 Murfreesboro Road, Nashville, Tennessee, 37217</h6>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='contact-location'>
                                <FaFax className='contact-arrow' />
                                <h6>2020 Murfreesboro Road, Nashville, Tennessee, 37217</h6>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='contact-location'>
                                <HiMail className='contact-arrow' />
                                <h6>2020 Murfreesboro Road, Nashville, Tennessee, 37217</h6>
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Contact
