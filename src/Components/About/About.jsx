import React from 'react'
import './About.css'

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const About = () => {
  return (
    <div className="about">

        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>About</span>
            <span></span>

        </div>

        {/* right side */}
        <div className="cards"></div>
    
    
    </div>
  )
}

export default About 