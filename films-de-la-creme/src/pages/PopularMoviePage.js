import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/PopularMoviePage.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

class PopularMoviePage extends React.Component {
    state = {
        loading: true,
        movie: [],
        movie1: [],
        movie2: [],
        movie3: [],
        movie4: [],
        movie5: [],
        movie6: [],
        movie7: [],
        poster: ''
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.results, loading: false })

        let url1 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=2'
        let response1 = await fetch(url1);
        let data1 = await response1.json();
        this.setState({ movie1: data1.results, loading: false })

        let url2 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=3'
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        this.setState({ movie2: data2.results })

        let url3 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=4'
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        this.setState({ movie3: data3.results })

        let url4 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=5'
        let response4 = await fetch(url4);
        let data4 = await response4.json();
        this.setState({ movie3: data4.results })

        let url5 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=6'
        let response5 = await fetch(url5);
        let data5 = await response5.json();
        this.setState({ movie5: data5.results })

        let url6 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=7'
        let response6 = await fetch(url6);
        let data6 = await response6.json();
        this.setState({ movie6: data6.results })

        let url7 = 'https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=8'
        let response7 = await fetch(url7);
        let data7 = await response7.json();
        this.setState({ movie7: data7.results })

        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })
    }

    render() {

        return (
            <div className="PopularPage">

                <NavBar />

                <h1>Popular Movies </h1>
                <div className="container">

                    {this.state.movie.map((movie, i) => {
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

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>

                        )
                    }

                    )
                    }

                    {this.state.movie1.map((movie1, i) => {
                        return (
                            <div className="popular-details">
                                <div className="image">
                                    <img src={this.state.poster + movie1.poster_path} alt="" />
                                </div>

                                <div className="details">
                                    <h2>{movie1.title}</h2>
                                    <h3>
                                        <i class="fas fa-star"></i> {movie1.vote_average}/10
                                    </h3>

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                    {this.state.movie2.map((movie2, i) => {
                        return (
                            <div className="popular-details">
                                <div className="image">
                                    <img src={this.state.poster + movie2.poster_path} alt="" />
                                </div>

                                <div className="details">
                                    <h2>{movie2.title}</h2>
                                    <h3>
                                        <i class="fas fa-star"></i> {movie2.vote_average}/10
                                    </h3>

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                    {this.state.movie3.map((movie3, i) => {
                        return (
                            <div className="popular-details">
                                <div className="image">
                                    <img src={this.state.poster + movie3.poster_path} alt="" />
                                </div>

                                <div className="details">
                                    <h2>{movie3.title}</h2>
                                    <h3>
                                        <i class="fas fa-star"></i> {movie3.vote_average}/10
                                    </h3>

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                    {this.state.movie4.map((movie, i) => {
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

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                    {this.state.movie5.map((movie, i) => {
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

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                    {this.state.movie6.map((movie, i) => {
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

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                    {this.state.movie7.map((movie, i) => {
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

                                    <ul>
                                        <li>
                                            <i class="fas fa-plus"></i>
                                        </li>
                                        <li>Add to List</li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                </div>

                <Footer />

            </div >
        )
    }

}

export default PopularMoviePage