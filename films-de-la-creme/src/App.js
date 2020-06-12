import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import PopularMoviePage from './pages/PopularMoviePage';



function App() {
  return (
    <div className="App">
      <Home />
      <p>{window.token}</p>

    </div>
  );
}

export default App;
