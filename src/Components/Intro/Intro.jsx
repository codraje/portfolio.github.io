import React from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import './Intro.css'


import github from '../../img/github.jpg';
import linkedin from '../../img/linkedin.jpg';
import instagram from '../../img/instagram.jpg';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img1/boy3.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

function intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi There!</span>
                <span> I'M</span>
                <span>Mohammad Rashid Javed</span>
                <span> Looking for an organisation where my ability can be 
                    reconized and also to enhance and update knowledge and 
                    skill that will contribute towards its growdh</span>
            </div>
            <button className="button i-button">About me</button>
            <div className="i-icons">
              <img src={github} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt=""  />
          <img src={glassesimoji} alt=""  />
          <div style={{top: '-4%',  left:'51%'}} >
            <FloatingDiv image={crown} text1="#" text2="Programmer" />
          </div>
          <div style={{top: '19rem',  left:'-8rem'}} >
            <FloatingDiv image={thumbup} text1="Problem" text2="Solver" />
          </div>
          
          {/* blur divs */}

          <div className="blur" style={{backgound: "rgb(238 210 255"}}></div>
          <div className=" b-blur1" ></div>
          <div className=" b-blur2" ></div>

        </div>
    </div>
  )
}

export default intro