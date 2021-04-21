import React from 'react'
import Contact from '../../Components/Contact'
import GetAPet from '../../Components/GetAPet'
import HomeScreen from '../../Components/HomeScreen'
import Ourstory from '../../Components/Ourstory'
import Statistics from '../../Components/Statistics'

const Homepage = () => {
    return (
        <div>
            <HomeScreen />
            <GetAPet />
            <Ourstory />
            <Statistics />
            <Contact />
        </div>
    )
}

export default Homepage
