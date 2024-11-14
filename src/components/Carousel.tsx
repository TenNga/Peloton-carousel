import React from 'react'
import prevIcon from '../assets/icons/prevIcon.svg';
import nextIcon from '../assets/icons/nextIcon.svg';
import { cards } from '../constants/appConstants';

const Carousel = () => {

    const renderSlides = cards.map(card => (
        <li key={card.heading}>
            <div>
                <article>
                    <a href={card.link}>
                        <img src={card.imageURL} alt={card.heading} />
                    </a>
                    <h2>{card.heading}</h2>
                    <p>
                        <a href={card.link}>{card.linkText}</a>
                    </p>
                </article>
            </div>
        </li>
    ))

  return (
    <section>
        <h1>Preview thousands of classes on the Peloton App</h1>
        <div className='carousel-container'>
            <ul className='slide-controls'>
                <li className='slide-prev-btn'>
                    <button>
                        {prevIcon}
                    </button>
                </li>
                <li className='slide-next-btn'>
                    <button>
                        {nextIcon}
                    </button>
                </li>
            </ul>
            <div className='slide-container'>
                <ul className='slide-list'>
                    {renderSlides}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Carousel