import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({cats}) => {
    return (
        <Card className='my-3 rounded'>
            <Link to={`/cats/${cats._id}`}>
                <Card.Img src={cats.image} variant='top' />
            </Link>

            <Card.Body>
            <Link to={`/cats/${cats._id}`}>
                <Card.Title as='div'>
                    <strong>{cats.name}</strong>
                </Card.Title>
            </Link>
            </Card.Body>
        </Card>
    )
}

export default Product
