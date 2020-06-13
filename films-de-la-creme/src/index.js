import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import PopularMoviePage from './pages/PopularMoviePage';
import TrendingMoviePage from './pages/TrendingMoviePage';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TopRatedMoviePage from './pages/TopRatedMoviePage';
import UpcomingMoviePage from './pages/UpcomingMoviePage';
import TvShows from './pages/TvShows';
import TrendingTvPage from './pages/TrendingTvPage';
import TopRatedTvPage from './pages/TopRatedTvPage';


ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter >
      <Switch >
        {/* <PrivateRoute exact path={['/home', '/']} component={Home} /> */}
        <Route exact path={['/home', '/']} component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path='/movies/popular' exact component={PopularMoviePage} />
        <Route path='/movies/trending' exact component={TrendingMoviePage} />
        <Route path='/movies/top_rated' exact component={TopRatedMoviePage} />
        <Route path='/movies/upcoming' exact component={UpcomingMoviePage} />
        <Route path='/tv' exact component={TvShows} />
        <Route path='/tv/trending' exact component={TrendingTvPage} />
        <Route path='/tv/top_rated' exact component={TopRatedTvPage} />


      </Switch >
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
