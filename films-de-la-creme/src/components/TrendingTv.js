import React, { Component } from 'react'
import '../css/TrendingTv.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class TrendingTv extends React.Component {
    state = {
        loading: true,
        movie: [],
        poster: ''
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/trending/tv/week?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&include_adult=false";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.results, loading: false })
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })
    }

    render() {
        return (
            <div className="Trending">
                <h1>Trending Tv Shows <a href="/tv/trending"><span>Explore All</span></a></h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                >

                    {this.state.movie.map((movie, i) => {
                        return (
                            <a href={
                                `/tv/${movie.id}`
                            }>
                                <div className="popular-details">
                                    <div className="image">
                                        <img src={this.state.poster + movie.poster_path} alt="" />
                                    </div>

                                    <div className="details">
                                        <h2>{movie.name}</h2>
                                        <h3>
                                            <i class="fas fa-star"></i> {movie.vote_average}/10
                                    </h3>

                               

                                    </div>
                                </div>
                            </a>
                        )
                    }

                    )
                    }

                </Carousel>
            </div>
        )
    }
}

export default TrendingTv