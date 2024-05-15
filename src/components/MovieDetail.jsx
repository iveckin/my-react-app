import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieData from './movies.json'; // Import the JSON file
import '../css/MovieDetail.css'


function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movieData.find(movie => movie.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    }
  }, [id]);

  if (!movie) {
    return <div>Not found</div>;
  }

  return (
    <div className="movie-container">
      <div className="stream-container">
      <iframe
        width="720"
        height="480"
        src={movie.stream_url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      <div className="movie-info">
        <img className="movie-poster" src={movie.poster} alt={movie.title} />
        <h2 className="movie-title">{movie.title}</h2>
        <p className='movie-description'>
          {movie.genres.join(', ')}<br/><br/>
          {movie.year}<br/><br/>
          {movie.descriptions[0]}
        </p>
      </div>
    </div>

  );
}

export default MovieDetail;
