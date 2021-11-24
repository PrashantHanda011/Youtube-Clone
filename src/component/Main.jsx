import React from 'react'
import '../style/main.css'
import Category from './Category'
import Videos from './Videos'

function Main() {
    return (
        <div className='main'>
            <Category/>
            <div className='videos-box'>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            <Videos/>
            </div>
        </div>
    )
}

export default Main
