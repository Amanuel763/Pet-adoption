import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { MdPets } from 'react-icons/md'
import { AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
        <Container className='Footer-container'>
            <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='footer-text'>
                        <h3><MdPets />     PETLOVER</h3>
                        <h6>We are one of Nashville's dedicated Adoptions center, looking for forever homes for our fury friends.</h6>
                        <div className='social'>
                            <FiInstagram  className='instagram'/>
                            <FiTwitter className='twitter' />
                            <AiOutlineYoutube className='youtube' />
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='footer-text'>
                        <h3>Operations</h3>
                        <ul className='operation-list'>
                            <li>Sunday: 6am to 5pm</li>
                            <li>Monday: 6am to 5pm</li>
                            <li>Tuesday: 6am to 5pm</li>
                            <li>Wednsday: 6am to 5pm</li>
                            <li>Thursday: 6am to 5pm</li>
                            <li>Friday: 6am to 5pm</li>
                            <li>Saturday: 6am to 5pm</li>

                        </ul>
                    </div>
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='footer-text'>
                        <h3>Resources</h3>
                        <h6>Our Services</h6>
                        <h6>Our Gallery</h6>
                        <h6>Our Team Members</h6>

                    </div>
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='footer-text'>
                        <h3>Resources</h3>
                        <h6>Our Services</h6>
                        <h6>Our Gallery</h6>
                        <h6>Our Team Members</h6>

                    </div>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default Footer
