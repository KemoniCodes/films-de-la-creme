import React, { Component } from 'react'
import '../css/Movies.css'
import '../css/Slideshow.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TrendingMovie from '../components/TrendingMovie';
import TopRatedMovie from '../components/TopRatedMovie';
import UpcomingMovie from '../components/UpcomingMovie';
import EditorsPickMovie from '../components/EditorsPickMovie';


class Movies extends React.Component {
    state = {
        loading: true,
        movie: [],
        bg: ''
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let response = await fetch(url);
        let res = await fetch(config);
        let data = await response.json();
        let image = await res.json();
        this.setState({ movie: data.results[17], loading: false })
        this.setState({ bg: image.images.secure_base_url + image.images.backdrop_sizes[3] })

    }

    render() {
        return (
            <div className="Movies">
                <NavBar />

                <div className="now-playing-details">

                    <div className="details">
                        <h1 className="title"> {this.state.movie.title} <span className="date"> ({this.state.movie.release_date}) </span> </h1>
                        <h2>{this.state.movie.vote_average}/10 <span>{this.state.movie.vote_count} reviews </span></h2>

                        <p>{this.state.movie.overview}</p>
                    </div>

                    < div className="image" >
                        <img src={this.state.bg + this.state.movie.poster_path} alt="" />

                    </div>

                </div>

                <TrendingMovie />
                <TopRatedMovie />
                <UpcomingMovie />
                <EditorsPickMovie />

                <Footer />
            </div>
        )
    }
}

export default Movies