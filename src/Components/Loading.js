import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


const Loading = () => {
    return (
        <div align='center'>
                <Loader type='MutatingDots'
                color='rgb(0,153,255'
                height={100}
                width={100}
                timeout={3000} />
        </div>
    )
}

export default Loading