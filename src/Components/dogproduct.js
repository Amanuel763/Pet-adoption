import React from 'react'
import {Card} from 'react-bootstrap'

const Dogproduct = ({dogs}) => {
    return (
        <Card className='my-3 rounded'>
            <Card.Img src={dogs.image} variant='top' />

            <Card.Body>
                    <Card.Title as='div'>
                        <strong>{dogs.name}</strong>
                    </Card.Title>

                <Card.Text>
                    {dogs.description}
                </Card.Text>
                <Card.Text>
                   $ {dogs.price}
                </Card.Text>
        
            </Card.Body>
        </Card>
    )
}

export default Dogproduct