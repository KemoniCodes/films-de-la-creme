import React from 'react';
import './css/App.css';
import Home from './pages/Home';




function App() {
  return (
    <div className="App">
      <Home />
      <p>{window.token}</p>
    </div>
  );
}

export default App;
