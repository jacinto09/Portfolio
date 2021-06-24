import React from 'react'

import Section from './Section'
import Scroll from './Scroll'

import {FaEnvelope} from 'react-icons/fa'

function Main() {
    return (
        <div className="main">
            
            <Section/>
            <a className="btn-mail" href="/contact"><FaEnvelope className="fa-mail"/> <h1 className="h1-mail">Contact me</h1></a>
            <Scroll/>
            
            
        </div>
    )
}

export default Main
