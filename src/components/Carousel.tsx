import React from 'react'
import {ReactComponent as PrevIcon } from '../assets/icons/prevIcon.svg';
import {ReactComponent as NextIcon } from '../assets/icons/nextIcon.svg';
import { cards } from '../constants/appConstants';
import Card from './Card';

const Carousel = () => {

    const renderSlides = cards.map(card => <Card card={card} />)

  return (
    <section>
        <h1>Preview thousands of classes on the Peloton App</h1>
        <div className='carousel-container'>
            <ul className='slide-controls'>
                <li className='slide-prev-btn'>
                    <button>
                        <PrevIcon />
                    </button>
                </li>
                <li className='slide-next-btn'>
                    <button>
                        <NextIcon />
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