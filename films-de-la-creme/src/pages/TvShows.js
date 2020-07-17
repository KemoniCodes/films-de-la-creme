import React, { Component } from 'react'
import '../css/TvShows.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import TrendingTv from '../components/TrendingTv';
import TopRatedTv from '../components/TopRatedTv';
import EditorsPickTv from '../components/EditorsPickTv';

class TvShows extends React.Component {
    state = {
        loading: true,
        movie: [],
        bg: ''
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/tv/on_the_air?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let response = await fetch(url);
        let res = await fetch(config);
        let data = await response.json();
        let image = await res.json();
        this.setState({ movie: data.results, loading: false })
        this.setState({ bg: image.images.secure_base_url + image.images.backdrop_sizes[3] })

    }

    render() {
        return (
            <div className="TvShows">
                <NavBar />

                <Carousel
                    infinite
                    dots
                    autoPlay={4000}
                    animationSpeed={2000}
                >

                    {this.state.movie.map((movie, i) => {

                        return (

                            <div className="now-playing-details">

                                <div className="details">
                                    <h2>On the Air</h2>
                                    <h1 className="title"> {movie.name} <span className="date"> ({movie.first_air_date}) </span> </h1>
                                    <h2>{movie.vote_average}/10 <span>{movie.vote_count} reviews </span></h2>

                                    <p>{movie.overview}</p>
                                </div>

                                < div className="image" >
                                    <img src={this.state.bg + movie.poster_path} alt="" />

                                </div>
                            </div>
                        )
                    }
                    )
                    }

                </Carousel >

                <TrendingTv />
                <TopRatedTv />
                <EditorsPickTv />

                <Footer />

            </div>
        )
    }
}

export default TvShows