import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Dogproduct from '../../Components/dogproduct'
import Loading from '../../Components/Loading'
import dogs from '../../dogs'


const Dogpage = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    })
  
    return (
        <Container>
        <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
                <div className='agents-header'>
                    <h1>Choose a Fury Friend</h1>
                    <hr className='hr-agents' />
                </div>
            </Col>
        </Row>

        {isLoading === true ? <Loading /> : 
                        <Row>
                        {dogs.map((dogs) => (
                            <Col key={dogs.name} sm={12} md={4} lg={4} xl={4}>
                                <Dogproduct dogs = {dogs} />
                            </Col>
                        ))}
                    </Row> 
        }
    
    </Container>
    )
}

export default Dogpage