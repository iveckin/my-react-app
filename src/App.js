// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import MovieDetail from './components/MovieDetail'
import Header from './components/Header';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div className='overlay'></div>
      <Header />
      <Routes>
        {/* Render the Home component on the root route */}
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
