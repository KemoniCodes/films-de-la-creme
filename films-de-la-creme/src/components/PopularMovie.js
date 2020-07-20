import React from 'react'
import { Link } from 'react-router-dom';
import '../css/PopularMovie.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class PopularMovie extends React.Component {
    state = {
        loading: true,
        movie: [], //initializing movie's state
        poster: '',
        name: "React"
    }

    async componentDidMount() {
        //to fetch popular movies
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1&include_adult=false";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.results, loading: false })

        //to fetch images
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })

    }

    render() {
        return (
            <div className="Popular">
                <h1>Popular Movies < a href='/movies/popular'><span>Explore All</span></a></h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                    breakpoints={{
                        640: {
                            slidesPerPage: 2,
                            arrows: true
                        },
                        900: {
                            slidesPerPage: 4,
                            arrows: true
                        }

                    }}
                >

                    {/* iterating through the 'movie' state's array retreiving the popular movies */}
                    {this.state.movie.map((movie, i) => {
                        return (

                            // linking to movie deets page based on the movie state's id
                            <Link to={{
                                pathname: `/movie/${movie.id}`
                            }}>

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
                            </Link >
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