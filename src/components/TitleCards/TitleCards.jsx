import React, { useEffect, useRef } from 'react';
import cards_data from '../../assets/cards/Cards_data'
import './TitleCards.css';

const TitleCards = ({title,category}) => {

  const cardRef=useRef();
  const handlewheel=(event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{
    cardRef.current.addEventListener('wheel',handlewheel)

  },[])
  return (
  
    
    <div className='cardtitles'>
    <h2>{title?title:"Popular on Netflix"}</h2>
    <div className='card-list' ref={cardRef}>
    {cards_data.map((card,index)=>{
      return <div className='card' key={index}>
        <img src={card.image} alt='card'></img>
        <p>{card.name}</p>
      </div>

    })}
    </div>
      
    </div>
  )
}

export default TitleCards


