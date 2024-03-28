import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find(movie => movie.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    }
  }, [id, movies]);

  if (!movie) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
