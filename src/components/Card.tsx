import React from 'react'
import { cardType } from '../types/globle';

const Card = ({card} : { card: cardType}) => {

  return (
    <li key={card.heading}>
        <article className='card-content'>
            <a href={card.link} className='image-container'>
                <img src={card.imageURL} alt={card.heading} className='card-image' />
                <div className='workout-icon'>
                    <card.workoutIcon/>
                </div>
            </a>
            <h2 className='card-heading'>{card.heading}</h2>
            <p className='card-link'>
                <a href={card.link}>{card.linkText}</a>
            </p>
        </article>
    </li>
  )
}

export default Card