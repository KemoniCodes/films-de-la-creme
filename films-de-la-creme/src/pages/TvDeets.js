import React from 'react'
import '../css/MovieDeets.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class TvDeets extends React.Component {
    state = {
        loading: true,
        tv: [],
        tv_id: this.props.match.params.show_id,
        tv_genre: [],
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
        let _id = this.state.tv_id
        let url1 = `https://api.themoviedb.org/3/tv/${_id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`;
        let response1 = await fetch(url1);
        let data1 = await response1.json();
        this.setState({ tv: data1, loading: false })
        this.setState({ tv_id: data1.show_id, loading: false })
        this.setState({ tv_genre: data1.genres, loading: false })
        this.setState({ director: data1.created_by, loading: false })
        let url2 = `https://api.themoviedb.org/3/tv/${_id}/credits?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        this.setState({ cast: data2.cast, loading: false })

        let url3 = `https://api.themoviedb.org/3/tv/${_id}/similar?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1`
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        this.setState({ rec: data3.results, loading: false })

        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[3] })
        this.setState({ poster1: image.images.secure_base_url + image.images.poster_sizes[2] })
        this.setState({ backdrop: image.images.secure_base_url + image.images.backdrop_sizes[3] })
    }

    render() {
        let slides = this.state.cast.length < 5;
        return (
            <div className="MovieDeets">
                <div className="movie-details">
                    <div className="image">
                        <img src={this.state.backdrop + this.state.tv.backdrop_path} alt="" />
                    </div>

                    <div className="details">
                        <h1>{this.state.tv.name} <span>({this.state.tv.first_air_date})</span> </h1>
                        {this.state.tv_genre.map((genre, i) => {
                            return (
                                <h2>{genre.name}</h2>
                            )
                        }
                        )}

                        <h3>
                            <i class="fas fa-star"></i> {this.state.tv.vote_average}/10
                        </h3>
                        <ul>
                            <li>
                                <i class="fas fa-plus"></i>
                            </li>
                            <li>Add to List</li>
                        </ul>
                    </div>
                </div>

                <h2>Overview</h2>
                <div className="overview">
                    <div className="image">
                        <img src={this.state.poster + this.state.tv.poster_path} alt="" />
                    </div>
                    <div className="overview-details">
                        <h3>{this.state.tv.tagline}</h3>
                        <p>{this.state.tv.overview}</p>

                        <ul>
                            <li>Created By:
                                {this.state.director.map((director, i) => {
                                return (
                                    <span> <br />{director.name} </span>
                                )
                            }
                            )}
                            </li>

                            <li>Episodes: <span>{this.state.tv.number_of_episodes}</span></li>
                            <li>Episode Run Time: <span>{this.state.tv.episode_run_time}m</span></li>
                            <li>Seasons: <span>{this.state.tv.number_of_seasons}</span></li>
                            <li>Original Language: <span>{this.state.tv.original_language}</span></li>
                            <li>Status: <span>{this.state.tv.status}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="cast">

                    <div className="PopularTv">
                        <h1>Cast </h1>

                        <Carousel
                            slidesPerPage={slides ? this.state.cast.length : 5}
                            arrows
                            infinite
                        >

                            {this.state.cast.map((tvShow, i) => {
                                let img = tvShow.profile_path;

                                return (
                                    <div className="popular-details">
                                        <div className="image">
                                            {img ? <img src={this.state.poster1 + tvShow.profile_path} alt="" /> : <img src={this.state.poster1 + tvShow.profile_path} alt="No Image Was Found" />}
                                        </div>

                                        <div className="details">
                                            <h2>{tvShow.character}</h2>
                                            <h2 id="actor">{tvShow.name}</h2>
                                        </div>
                                    </div>
                                )
                            }

                            )
                            }

                        </Carousel>
                    </div>
                </div>

                <div className="similar">
                    <div className="PopularTv">
                        <h1>Similar Tv </h1>

                        <Carousel
                            slidesPerPage={5}
                            arrows
                            infinite
                        >

                            {this.state.rec.map((tvShow, i) => {
                                return (
                                    <a href={`/tv/${tvShow.id}`
                                    }>
                                        <div className="popular-details">
                                            <div className="image">
                                                <img src={this.state.poster1 + tvShow.poster_path} alt="" />
                                            </div>

                                            <div className="details">
                                                <h2>{tvShow.name}</h2>
                                                <h3>
                                                    <i class="fas fa-star"></i> {tvShow.vote_average}/10
                                            </h3>

                                                <ul>
                                                    <li>
                                                        <i class="fas fa-plus"></i>
                                                    </li>
                                                    <li>Add to List</li>
                                                </ul>
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
            </div>
        )
    }

}

export default TvDeets