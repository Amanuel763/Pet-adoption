import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cats from '../../cats'
import Catproduct from '../../Components/catproduct'
import Loading from '../../Components/Loading'

const Catpage = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    })

    return (


        <Container className='Catpage'>
            <Row>
                <Col sm={12} md={12} lg={12} xl={12}>
                    <div className='cat-header'>
                        <h1>Choose a Fury Friend</h1>
                        <hr className='hr-cats' />
                    </div>
                </Col>
            </Row>
            {isLoading === true ? <Loading /> :

            <Row>
                {cats.map((cats) => (
                    <Col key={cats._id} sm={12} md={4} lg={4} xl={4}>
                        <Catproduct cats = {cats} />
                    </Col>
                ))}
            </Row>    
            
                }
        </Container>

    )
}

export default Catpage
