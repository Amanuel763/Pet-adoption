import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'

import image from '../Images/cat1.jpg'

const GetAPet = () => {
    return (
    
            <Container className='Getapet-Container'>

                <Row>
                <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='Getapet-Header'>
                            <h1>Reasons to own a pet</h1>
                            <hr className='hr-getapet' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className='getapet-container '>
                            <Card className='getapet-card'>
                                <Image src={image} />

                                <Card.Body className='getapet-header'>
                                    Heart Healthy
                                </Card.Body>
                                <Card.Text className='getapet-text'>
                                    Did you know that a cats purr relieves anxiety and stress?
                                </Card.Text>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className='getapet-container '>
                            <Card className='getapet-card'>
                                <Image src={image} />

                                <Card.Body className='getapet-header'>
                                    Great Companion
                                </Card.Body>
                                <Card.Text className='getapet-text'>
                                    Did you know that a cats purr relieves anxiety and stress?
                                </Card.Text>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className='getapet-container'>
                            <Card className='getapet-card'>
                                <Image src={image} />

                                <Card.Body className='getapet-header'>
                                    Best Alarm
                                </Card.Body>
                                <Card.Text className='getapet-text'>
                                    Did you know that a cats purr relieves anxiety and stress?
                                </Card.Text>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
    
    )
}

export default GetAPet
