import React, { useRef } from 'react'
import {ReactComponent as PrevIcon } from '../assets/icons/prevIcon.svg';
import {ReactComponent as NextIcon } from '../assets/icons/nextIcon.svg';
import { cards } from '../constants/appConstants';
import Card from './Card';

const Carousel = () => {

    const sliderRef = useRef<HTMLUListElement>(null);
    const slideRef = useRef<HTMLLIElement>(null);

    const renderSlides = cards.map(card => <Card key={card.heading} card={card} />)
    const handleSliderClick = (event:React.MouseEvent<HTMLLIElement>) => {
        const clickedTarget = event.target as HTMLLIElement;
        
        if (sliderRef.current) {
            if(clickedTarget.parentElement?.getAttribute('data-next')){
                sliderRef.current.scrollLeft += 288;
            }else {
                sliderRef.current.scrollLeft -= 288;
            }
        }
    }


  return (
    <section className='main-slider-container'>
        <h1 className='slider-heading'>Preview thousands of classes on the Peloton App</h1>
        <div className='carousel-container' draggable="true"  style={{ overflowX: 'auto' }}>
            <ul className='slide-controls'>
                <li onClick={handleSliderClick}>
                    <button className='slide-prev-btn slide-control' data-prev>
                        <PrevIcon />
                    </button>
                </li>
                <li onClick={handleSliderClick}>
                    <button className='slide-next-btn slide-control'  data-next>
                        <NextIcon />
                    </button>
                    
                </li>
            </ul>
            <div className='slide-container'>
                <ul ref={sliderRef}  className='slide-list'>
                    {renderSlides}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Carousel