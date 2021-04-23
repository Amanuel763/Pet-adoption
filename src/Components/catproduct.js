import React from 'react'
import {Card} from 'react-bootstrap'

const Catproduct = ({cats}) => {
    return (
        <Card className='my-3 rounded'>
                <Card.Img src={cats.image} variant='top' />

            <Card.Body>
                <Card.Title as='div'>
                    <strong>{cats.name}</strong>
                </Card.Title>

            <Card.Text>
                    {cats.description}
                </Card.Text>
                <Card.Text>
                   $ {cats.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Catproduct