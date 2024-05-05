import React, { useEffect, useRef, useState } from 'react';
import cards_data from '../../assets/cards/Cards_data'; // Assuming this is not being used
import './TitleCards.css';
import { Link } from 'react-router-dom';

// TitleCards component displaying a list of movie or TV show cards
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]); // State to store API data
  const cardRef = useRef(); // Reference for card list container

  // Function to handle mouse wheel event for scrolling
  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    // Fetching data from the API
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2ZiYTVkMWNhYmJhMzhlNGRkMWUyYjAyNGI1YjcxOSIsInN1YiI6IjY2MzUwMzFmOTlkNWMzMDEyOTU3OGNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DQZVJe8DDhecko6NQZ5OFj-u2lfy2gx0Xr197toKAvI'
          }
        };
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options);
        const data = await response.json();
        setApiData(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Adding event listener for mouse wheel scrolling
    cardRef.current.addEventListener('wheel', handleWheel);

    // Cleanup function to remove event listener
    return () => {
      cardRef.current.removeEventListener('wheel', handleWheel);
    };
  }, [category]); // Dependency on category ensures data is refetched when category changes

  return (
    <div className='cardtitles'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardRef}>
        {/* Mapping over API data to render cards */}
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt='card'></img>
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
