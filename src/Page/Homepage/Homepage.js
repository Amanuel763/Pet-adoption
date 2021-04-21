import React from 'react'
import Contact from '../../Components/Contact'
import GetAPet from '../../Components/GetAPet'
import HomeScreen from '../../Components/HomeScreen'
import Ourstory from '../../Components/Ourstory'
import Parallax from '../../Components/Parallax'
import Statistics from '../../Components/Statistics'

const Homepage = () => {
    return (
        <div>
            <HomeScreen />
            <GetAPet />
            <Ourstory />
            <Parallax />
            <Statistics />
            <Contact />
        </div>
    )
}

export default Homepage
