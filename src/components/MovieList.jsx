import React from 'react';
import { Link } from 'react-router-dom';
import movieData from './movies.json'; // Import the JSON file
import '../css/MovieList.css'; // Import the CSS file

function MovieList() {
  return (
    <div className='black'>
      <h2>List of Movies</h2>
      <ul className="movie-list">
        {movieData.map(movie => (
          <li key={movie.id} className="movie-list-item">
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} className="movie-image" />
            </Link>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-description">{movie.descriptions[0]}</p>
            {/* Display other movie information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
