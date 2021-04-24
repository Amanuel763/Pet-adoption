import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiTwitter } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { GrLinkedin } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <Container className='Footer-container'>
                <Row className='footer-container'>
                    <Col sm={12} md={3} lg={3} xl={3}>
                        <div className='footer-text'>
                            <div className='footer-logo'>
                                <h6>PETLOVERS was created in 2010 to help our fury friends in Nashville find a pet friendly home.</h6>
                                <FiTwitter className='social twitter' />
                                <FaFacebook className='social facebook' />
                                <ImYoutube2 className='social youtube' />
                                <GrLinkedin className='social linkedin' />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3} xl={3}>
                        <div className='footer-text'>
                            <h2>QUICK LINKS</h2>
                            <hr className='hr-footer' />

                            <Link to='/'>
                                <h6>Home</h6>
                            </Link>
                            <Link to='/cats'>
                                <h6>Cats</h6>
                            </Link>
                            <Link to='/dogs'>
                                <h6>Dogs</h6>
                            </Link>
                            <Link to='/'>
                                <h6>Volunteer and Foster</h6>
                            </Link>
                            <Link to='/'>
                                <h6>Support</h6>
                            </Link>
                            <Link to='/'>
                                <h6>Donate</h6>
                            </Link>
                        </div>
                    </Col>

                    <Col sm={12} md={3} lg={3} xl={3}>
                        <div className='footer-text'>
                            <h2>We Teach</h2>
                            <hr className='hr-footer' />
                            <h6>Contact us and we will help you potty train your fury friend.</h6>
                        </div>
                    </Col>

                    <Col sm={12} md={3} lg={3} xl={3}>
                        <div className='footer-text'>
                            <h2>Resource</h2>
                            <hr className='hr-footer' />
                            <h6>Frequently Asked Questions</h6>
                            <h6>Frequently Asked Questions</h6>
                            <h6>Frequently Asked Questions</h6>
                            <h6>Frequently Asked Questions</h6>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='copyright'>
                            <h6>&copy; All Rights Reserved to PETLOVER | Terms and Conditions</h6>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Footer
