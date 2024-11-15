import React, { useRef, useState } from 'react'
import {ReactComponent as PrevIcon } from '../assets/icons/prevIcon.svg';
import {ReactComponent as NextIcon } from '../assets/icons/nextIcon.svg';
import { cards } from '../constants/appConstants';
import Card from './Card';

const Carousel = () => {

    const sliderRef = useRef<HTMLUListElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const renderSlides = cards.map(card => <Card key={card.heading} card={card} />)

    const renderDot = cards.map((c,i) => {
        return <li key={c.heading} className={`dot ${currentSlide === i && 'current-dot'}`}></li>
    })

    const handleSliderClick = (event:React.MouseEvent<HTMLLIElement>) => {
        const clickedTarget = event.target as HTMLLIElement;
        
        if (sliderRef.current) {
            if(clickedTarget.parentElement?.getAttribute('data-next')){
                sliderRef.current.scrollLeft += 288;
                setCurrentSlide(prev => prev + 1)
            }else {
                sliderRef.current.scrollLeft -= 288;
                setCurrentSlide(prev => prev - 1)
            }
        }
    }


  return (
    <section className='main-slider-container'>
        <h1 className='slider-heading'>Preview thousands of classes on the Peloton App</h1>
        <div className='carousel-container' style={{ overflowX: 'auto' }}>
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
                <ul ref={sliderRef}  className='slide-list' draggable="true" >
                    {renderSlides}
                </ul>
            </div>

            <div className='dot-container'>
                <ul className='dot-list'>
                    {renderDot}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Carousel