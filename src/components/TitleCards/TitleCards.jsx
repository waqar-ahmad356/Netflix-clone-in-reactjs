import React, { useEffect, useRef, useState } from 'react';
import cards_data from '../../assets/cards/Cards_data'
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
  const [apidata,setApiData]=useState([]);
  const cardRef=useRef();
  const handlewheel=(event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2ZiYTVkMWNhYmJhMzhlNGRkMWUyYjAyNGI1YjcxOSIsInN1YiI6IjY2MzUwMzFmOTlkNWMzMDEyOTU3OGNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DQZVJe8DDhecko6NQZ5OFj-u2lfy2gx0Xr197toKAvI'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel',handlewheel)

  },[])
  return (
  
    
    <div className='cardtitles'>
    <h2>{title?title:"Popular on Netflix"}</h2>
    <div className='card-list' ref={cardRef}>
    {apidata.map((card,index)=>{
      return <Link to={`/player/${card.id}`} className='card' key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='card'></img>
        <p>{card.original_title}</p>
      </Link>

    })}
    </div>
      
    </div>
  )
}

export default TitleCards


