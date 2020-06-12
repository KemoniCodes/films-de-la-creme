import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import PopularMoviePage from './pages/PopularMoviePage';
import TrendingMoviePage from './pages/TrendingMoviePage';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter >
      <Switch >
        {/* <PrivateRoute exact path={['/home', '/']} component={Home} /> */}
        <Route exact path={['/home', '/']} component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path='/movies/popular' exact component={PopularMoviePage} />
        <Route path='/movies/trending' exact component={TrendingMoviePage} />

      </Switch >
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
