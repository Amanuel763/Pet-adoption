import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiDogHouse } from 'react-icons/gi'
import { BiHappyBeaming } from 'react-icons/bi'

const Statistics = () => {
    return (
        <Container className='Stats-Container'>
            <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='stats-text'>
                        <h1>
                            Our Stats
                        </h1>
                        <hr  className ='hr-stats'/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='stats card-1'>
                        <GiDogHouse className='stats-icon house' />
                        <div className ='stats-card-text'>
                            <h3>1000 +</h3>
                            <h4>Pets Adopted</h4>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='stats card-2'>
                        <GiDogHouse className='stats-icon house' />
                        <div className ='stats-card-text'>
                            <h3>1000 +</h3>
                            <h4>Pets Adopted</h4>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='stats card-3'>
                        <BiHappyBeaming className='stats-icon house' />
                        <div className ='stats-card-text'>
                            <h3>1000 +</h3>
                            <h4>Happy Owners</h4>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={3} lg={3} xl={3}>
                    <div className='stats card-4'>
                        <GiDogHouse className='stats-icon house' />
                        <div className ='stats-card-text'>
                            <h3>1000 +</h3>
                            <h4>Pets Adopted</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Statistics
