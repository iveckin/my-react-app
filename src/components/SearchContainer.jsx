// Assuming your JSON file is named 'movies.json'
import React, { useState } from 'react';
import '../css/SearchContainer.css'; // Import the CSS file
import moviesData from './movies.json'; // Import the JSON file

const SearchContainer = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Filter the data based on search query
    const filteredData = moviesData.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-container-wrapper">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="search-results">
        {searchResults.map((item) => (
          <div key={item.id} className="search-result-item">
            <img src={item.poster} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.year}</p>
            <p>{item.duration} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
