import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MoviesDetails from './components/MoviesDetails'; // Make sure it matches your component name

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:slug" element={<MoviesDetails />} />

      </Routes>
    </Router>
  );
}
