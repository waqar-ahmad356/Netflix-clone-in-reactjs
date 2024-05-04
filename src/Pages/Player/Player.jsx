import React, { useEffect, useState } from 'react'
import './Player.css';
import back_aarow_icon from '../../assets/back_arrow_icon.png';
import { useParams } from 'react-router-dom';

const Player = () => {
  const {id}=useParams();

  const [apidata,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2ZiYTVkMWNhYmJhMzhlNGRkMWUyYjAyNGI1YjcxOSIsInN1YiI6IjY2MzUwMzFmOTlkNWMzMDEyOTU3OGNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DQZVJe8DDhecko6NQZ5OFj-u2lfy2gx0Xr197toKAvI'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));

},[])



  return (
    <div className='player'>
    <img src={back_aarow_icon} alt="" />
    <iframe width="90%" height="90%"
    src={`https://www.youtube.com/embed/${apidata.key}`} title='triler' frameBorder='0' allowFullScreen></iframe>
    <div className='player-info'>
      <p>{apidata.published_at.slice(0,10)}</p>
      <p>{apidata.name}</p>
      <p>{apidata.type}</p>
    </div>
      
    </div>
  )
}

export default Player
