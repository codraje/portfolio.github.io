import React from 'react'
import './services.css';

import HeartsEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { Card } from '../Card/Card';

export const services = () => {
  return (
    
    <div className='services'>
    <div className='awesome'>
        {/*left side*/}
        <span>My Awesome</span>
        <span>Services</span>
        <span>Since the beginning of my journey as a developer, I have work with many languages as
        <br/> C++, C, java, Java Scripet, Python, CSS3, HTML5  </span>
        <button className='button s-button'>Download CV</button>
        <div className='blur s-blur' style={{background: "#ABF1FF94"}}></div>
    </div>
    <div className='cards'>
        {/*right side*/}
        <div style={{left: '14rem'}}>
        <Card
            emoji = {HeartsEmoji}
            heading ={'Design'}
            detail = {'Figma Sketch, Photoshop'}
        />
        </div>
       
        <div style={{top: '14rem', left:'4rem'}}>
        <Card
            emoji = {Glasses}
            heading ={'Developer'}
            detail = {'C, C++, Java, Java Script, Python , ReactJS, NodeJS TailwindCss'}
        />
        </div>
       
        <div style={{top:'14rem', left:'25rem'}}>
        <Card
            emoji = {Humble}
            heading ={'UI/UX'}
            detail = {''}
        />
        </div>
       
        
    </div>


    </div>
    
    
  )
}

export default services
