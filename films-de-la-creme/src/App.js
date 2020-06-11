import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';



function App() {
  useEffect(() => {
    fetch('/').then(response => response.json())

  }, [])

  return (
    <div className="App">
      < BrowserRouter >
        <Switch >
          {/* <PrivateRoute exact path={['/home', '/']} component={Home} /> */}
          <Route exact path={['/home', '/']} component={Home} />
          <Route path="/movies" component={Movies} />
        </Switch >
      </BrowserRouter >

      {/* <Home /> */}
    </div>
  );
}

export default App;
