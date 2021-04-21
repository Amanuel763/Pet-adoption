import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import video from '../videos/dogvideo1.mp4'

const HomeScreen = () => {
    return (
        <>
            <div className='hero-container'>
                <video className='video' autoPlay loop muted>
                    <source src={video} className='shade'></source>
                </video>
                <div className='body'>

                </div>
                <div className='hero-text'>
                    <h1>PET ADOPTION CENTER</h1>
                    <h5>GIVE A PET A FOREVER HOME</h5>
                    <LinkContainer to='/cats'>
                        <Button className='hero-button hero-button-1'>ADOPT A CAT</Button>
                    </LinkContainer>
                    <br />
                    <LinkContainer to='/dogs'>
                        <Button className='hero-button'>ADOPT A DOG</Button>
                    </LinkContainer>
                </div>
            </div>
        </>
    )
}

export default HomeScreen
