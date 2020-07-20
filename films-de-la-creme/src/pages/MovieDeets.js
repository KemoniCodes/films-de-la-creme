import React from 'react'
import '../css/MovieDeets.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'


class MovieDeets extends React.Component {
    state = {
        loading: true,
        movie: [],
        tv: [],
        movie_id: this.props.match.params.id,
        movie_genre: [],
        director: [],
        cast: [],
        rec: [],
        match: false,
        poster: '',
        poster1: '',
        backdrop: '',
        name: "React",
    }

    async componentDidMount() {
        let id = this.state.movie_id
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data, loading: false })
        this.setState({ movie_id: data.id, loading: false })
        this.setState({ movie_genre: data.genres, loading: false })

        let url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        this.setState({ cast: data2.cast, loading: false })
        this.setState({ director: data2.crew, loading: false })


        let url3 = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1`
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        this.setState({ rec: data3.results, loading: false })


        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[4] })
        this.setState({ poster1: image.images.secure_base_url + image.images.poster_sizes[2] })
        this.setState({ backdrop: image.images.secure_base_url + image.images.backdrop_sizes[3] })
    }

    render() {
        
        let slides = this.state.cast.length < 5;
        return (
            <div className="MovieDeets">
                <NavBar />

                <div className="movie-details">
                    <div className="image">
                        <img src={this.state.backdrop + this.state.movie.backdrop_path} alt="" />
                    </div>

                    <div className="details">
                        <h1>{this.state.movie.title} <span>({this.state.movie.release_date})</span> </h1>
                        {this.state.movie_genre.map((genre, i) => {
                            return (
                                <h2>{genre.name}</h2>
                            )
                        }
                        )}

                        <h3>
                            <i class="fas fa-star"></i> {this.state.movie.vote_average}/10
                        </h3>

                    </div>
                </div>

                <h2>Overview</h2>
                <div className="overview">
                    <div className="image">
                        <img src={this.state.poster + this.state.movie.poster_path} alt="" />
                    </div>
                    <div className="overview-details">
                        <h3>{this.state.movie.tagline}</h3>
                        <p>{this.state.movie.overview}</p>

                        <ul>
                            <li>Run Time: <span>{this.state.movie.runtime}m</span></li>
                            <li>Original Language: <span>{this.state.movie.original_language}</span></li>
                            <li>Status: <span>{this.state.movie.status}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="cast">
                    <div className="PopularTv">
                        <h1>Cast </h1>

                        <Carousel
                        //if there are less than 5 cast members then make slides per page however many cast members there are. If not less than 5 make it 4 slides per page
                            slidesPerPage={slides ? this.state.cast.length : 4}
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

                            {this.state.cast.map((movie, i) => {
                                let img = movie.profile_path;

                                return (
                                    <a href={`/person/${movie.id}`
                                    }>
                                        <div className="popular-details">
                                            <div className="image">
                                                {img ? <img src={this.state.poster1 + movie.profile_path} alt="" /> : <img src={this.state.poster1 + movie.profile_path} alt="No Image Was Found" />}
                                            </div>

                                            <div className="details">
                                                <h2>{movie.character}</h2>
                                                <h2 id="actor">{movie.name}</h2>
                                            </div>
                                        </div>
                                    </a>
                                )
                            }

                            )
                            }

                        </Carousel>
                    </div>
                </div>


                <div className="similar">
                    <div className="PopularTv">
                        <h1>Similar Movies </h1>

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

                            {this.state.rec.map((movie, i) => {
                                return (
                                    <a href={`/movie/${movie.id}`
                                    }>
                                        <div className="popular-details">
                                            <div className="image">
                                                <img src={this.state.poster1 + movie.poster_path} alt="" />
                                            </div>

                                            <div className="details">
                                                <h2>{movie.title}</h2>
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
                </div>
                <Footer />
            </div>
        )
    }

}

export default MovieDeets