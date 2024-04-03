import React from 'react';
import { Link } from 'react-router-dom';
import movieData from './movies.json'; // Import the JSON file
import '../css/MovieList.css'; // Import the CSS file

function MovieList() {
  return (
    <div className='black'>
      
      <ul className="movie-list">
        
        {movieData.map(movie => (
          <li key={movie.id} className={`movie-list-item ${movie.colorRating == "good" ? 'glow-red' : 'glow-blue'}`}>
            <div className="movie-image-container">
            <span className={`movie-rating ${movie.colorRating == "good" ? 'rating-red' : 'rating-blue'}`}>{movie.rating}</span>
              
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} className="movie-image" />
              </Link>
              
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
