import React, { Component } from 'react'
import '../css/PopularMovie.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class PopularMovie extends React.Component {
    state = {
        loading: true,
        movie: [],
        poster: ''
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.results, loading: false })
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.base_url + image.images.poster_sizes[2] })
    }

    render() {
        return (
            <div className="Popular">
                <h1>Popular Movies <span>Explore All</span></h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                >

                    {this.state.movie.map((movie, poster, i) => {
                        return (
                            <div className="popular-details">
                                <div className="image">
                                    <img src={this.state.poster + movie.poster_path} alt="" />
                                </div>

                                <div className="details">
                                    <h2>{movie.title}</h2>
                                    <h3>
                                        <i class="fas fa-star"></i> {movie.vote_average}/10
                                    </h3>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                </Carousel>
            </div>
        )
    }
}

export default PopularMovie