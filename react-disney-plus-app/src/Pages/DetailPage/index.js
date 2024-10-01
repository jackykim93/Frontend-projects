import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  let {movieId} = useParams();
  const [movie, setMovies] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      setMovies(response.data);
    }
    fetchData();
  }, [movieId])
  
  if(!movie) return null;


  return (
    <section>
      <img
        className='modal_poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"
      />
    </section>
  )
}

export default DetailPage