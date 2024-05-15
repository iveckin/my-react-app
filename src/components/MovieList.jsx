import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import movieData from './movies.json'; // Import the JSON file
import '../css/MovieList.css'; // Import the CSS file

function MovieList() {
  // State variables
  const [filterType, setFilterType] = useState('newest');
  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(18);

  // Function to filter movies based on the selected filter type
  const filterMovies = (type) => {
    let filtered = [...movieData];
    if (type === 'newest') {
      filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    } else if (type === 'popular') {
      filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (type === 'bestRated') {
      filtered.sort((a, b) => b.rating - a.rating);
    }
    setFilterType(type);
    setFilteredMovies(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Calculate the index of the first and last movies on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='black'>
      <button onClick={() => filterMovies('newest')} className={filterType === 'newest' ? 'active-filter' : ''}><h3>Najnovšie Pridané</h3></button>
      <button onClick={() => filterMovies('popular')} className={filterType === 'popular' ? 'active-filter' : ''}><h3>Najpopulárnejšie</h3></button>
      <button onClick={() => filterMovies('bestRated')} className={filterType === 'bestRated' ? 'active-filter' : ''}><h3>Najlepšie Hodnotené</h3></button>
      
      <i class="fa-solid fa-filter"> </i>
      <i class="fa-solid fa-caret-down"> </i>
      
      <ul className="movie-list">
        {currentMovies.map(movie => (
          <li key={movie.id} className={`movie-list-item ${movie.colorRating === "good" ? 'glow-red' : 'glow-blue'}`}>
            <div className="movie-image-container">
              <span className={`movie-rating ${movie.colorRating === "good" ? 'rating-red' : 'rating-blue'}`}>{'👍 ' + movie.rating}</span>
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} className="movie-image" />
              </Link>
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="pagination">
        {[...Array(Math.ceil(filteredMovies.length / moviesPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? 'active-page' : ''}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
