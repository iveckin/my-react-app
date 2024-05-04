// Home.jsx
import React from 'react';
import MovieList from './MovieList';
import SearchContainer from './SearchContainer';

function Home({ movies }) {
  const handleSearch = (searchQuery) => {
    console.log('Performing search with query:', searchQuery);
    // You can implement search functionality here if needed
  };

  return (
    <div>
      <SearchContainer onSearch={handleSearch} />
      <MovieList movies={movies} />
      {/* Add more components or content for your home page as needed */}
    </div>
  );
}

export default Home;
