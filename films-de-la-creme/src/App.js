import React, { useEffect } from 'react';
import './css/App.css';
import Home from './pages/Home';



function App() {
  useEffect(() => {
    fetch('/').then(response => response.json())

  }, [])
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
