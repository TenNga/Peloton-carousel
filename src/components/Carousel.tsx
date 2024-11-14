import React from 'react'
import {ReactComponent as PrevIcon } from '../assets/icons/prevIcon.svg';
import {ReactComponent as NextIcon } from '../assets/icons/nextIcon.svg';
import { cards } from '../constants/appConstants';
import Card from './Card';

const Carousel = () => {

    const renderSlides = cards.map(card => <Card card={card} />)

  return (
    <section className='main-slider-container'>
        <h1 className='slider-heading'>Preview thousands of classes on the Peloton App</h1>
        <div className='carousel-container'>
            <ul className='slide-controls'>
                <li className='slide-prev-btn slide-control'>
                    <PrevIcon />
                </li>
                <li className='slide-next-btn slide-control'>
                    <NextIcon />
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