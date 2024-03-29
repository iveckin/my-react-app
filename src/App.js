// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import axios from 'axios';
import Header from "./components/Header"
import SearchContainer from './components/SearchContainer';


function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchQuery) => {
    console.log('Performing search with query:', searchQuery);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('/movies.json'); // Adjust the path as needed
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (

    <Router>
      <div className='overlay'></div>
      <Header/>
      <SearchContainer onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    
    </Router>
  );
}

export default App;
