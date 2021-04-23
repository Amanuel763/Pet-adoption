import React, { useEffect } from 'react'
import  { Col, Container, Row } from 'react-bootstrap'
import { BiRun } from 'react-icons/bi'
import { BsAlarm } from 'react-icons/bs'
import { MdChildFriendly } from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css' 

const GetAPet = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
    
            <Container className='Getapet-Container'>

                <Row>
                <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='Getapet-Header' data-aos='fade-up'>
                            <h1>Reasons to own a pet</h1>
                            <hr className='hr-getapet' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className='getapet-container padding' data-aos='fade-up'>
                            <div className='getapet-header getapet-header-1'>
                                <BiRun />
                            </div>
                            <h5 className='getapet-position'>
                                Pets are great way to get your daily exercise in. Whether its an outdoor run with your dog, or playing catch with your cat indoors.
                            </h5>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className='getapet-container padding' data-aos='fade-up'>
                            <div className='getapet-header getapet-header-2'>
                                <BsAlarm />
                            </div>
                            <h5 className='getapet-position-1'>
                                Pets are great for children and also teach them responsibility when growing up.
                            </h5>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4}>
                        <div className='getapet-container' data-aos='fade-up'>
                            <div className='getapet-header getapet-header-3'>
                                <MdChildFriendly />
                            </div>
                            <h5 className='getapet-position-2'>
                                Pets are great for children and also teach them responsibility when growing up.
                            </h5>
                        </div>

                        
                    </Col>
                </Row>
            </Container>
    
    )
}

export default GetAPet
