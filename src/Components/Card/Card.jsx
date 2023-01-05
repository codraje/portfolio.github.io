import React from 'react'
import './Card.css'

export const Card = ({emoji, heading, detail}) => {
  return (
    <div className='Card'>
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>Learn more</button>
    </div>
  )
}
