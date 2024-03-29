import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieData from './movies.json'; // Import the JSON file

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
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.descriptions[0]}</p>
      {/* Display other movie information as needed */}
    </div>
  );
}

export default MovieDetail;
