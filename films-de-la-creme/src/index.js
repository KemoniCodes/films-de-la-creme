import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import PopularMoviePage from './pages/PopularMoviePage';
import TrendingMoviePage from './pages/TrendingMoviePage';
import * as serviceWorker from './serviceWorker';
import TopRatedMoviePage from './pages/TopRatedMoviePage';
import UpcomingMoviePage from './pages/UpcomingMoviePage';
import TvShows from './pages/TvShows';
import TrendingTvPage from './pages/TrendingTvPage';
import TopRatedTvPage from './pages/TopRatedTvPage';
import PopularTvPage from './pages/PopularTvPage';
import SearchResults from './pages/SearchResults';
import MovieDeets from './pages/MovieDeets';
import TvDeets from './pages/TvDeets';
import PeopleDeets from './pages/PeopleDeets';
import { AuthProvider } from "./Auth";
import PrivateRoute from './components/PrivateRoute'
import SignIn from './pages/SignIn';
import Register from './pages/Register';



ReactDOM.render(
  
  // page routing

  <React.StrictMode>
    <AuthProvider>
      < BrowserRouter >
        <Switch >
          <PrivateRoute exact path={['/home', '/']} component={Home} />
          <Route exact path={['/home', '/']} component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path='/movies/popular' exact component={PopularMoviePage} />
          <Route path='/movies/trending' exact component={TrendingMoviePage} />
          <Route path='/movies/top_rated' exact component={TopRatedMoviePage} />
          <Route path='/movies/upcoming' exact component={UpcomingMoviePage} />
          <Route path='/tv' exact component={TvShows} />
          <Route path='/tv/trending' exact component={TrendingTvPage} />
          <Route path='/tv/top_rated' exact component={TopRatedTvPage} />
          <Route path='/tv/popular' exact component={PopularTvPage} />
          <Route path='/search' exact component={SearchResults} />
          <Route exact path='/movie/:id' exact component={MovieDeets} />
          <Route exact path='/tv/:show_id' exact component={TvDeets} />
          <Route exact path='/person/:id' exact component={PeopleDeets} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />
        </Switch >
      </BrowserRouter >
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

serviceWorker.unregister();
