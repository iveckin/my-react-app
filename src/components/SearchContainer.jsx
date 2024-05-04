import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SearchContainer.css';
import moviesData from './movies.json';

const SearchContainer = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]);
    } else {
      const filteredData = moviesData.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setSearchResults(filteredData);
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-container-wrapper">
      <h1><span>kukni</span>.si</h1>
      <p>Čo si pozrieš dnes?</p>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="search-results">
          {searchResults.map((item) => (
            <Link key={item.id} to={`/movies/${item.id}`} className='search-result-item'>
              <div className={`search-result-item-content ${item.colorRating === "good" ? 'glow-red' : 'glow-blue'}`}>
                <img src={item.poster} alt={item.title} />
                <div className='item-description'>
                  <h3>{item.title}</h3>
                  <span className={`movie-rating ${item.colorRating === "good" ? 'rating-red' : 'rating-blue'}`}>{item.rating}</span>
                  <p>{item.year}</p>
                  <p>{item.duration} minutes</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
