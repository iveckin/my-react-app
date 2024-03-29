import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../css/SearchContainer.css'; // Import the CSS file
import moviesData from './movies.json'; // Import the JSON file

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
      <h2>Čo si chceš pozrieť dnes?</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-results">
        {searchResults.map((item) => (
          <Link key={item.id} to={`/movies/${item.id}`} className="search-result-item">
            <div className="search-result-item-content">
              <img src={item.poster} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.year}</p>
                <p>{item.duration} minutes</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
