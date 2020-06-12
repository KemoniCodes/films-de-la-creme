import React, { Component } from 'react'
import '../css/EditorsPick.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class EditorsPickMovie extends React.Component {
    state = {
        loading: true,
        movie: [],
        movie1: [],
        movie2: [],
        movie3: [],
        movie4: [],
        movie5: [],
        movie6: [],
        poster: ''
    }

    async componentDidMount() {
        // let url = "https://api.themoviedb.org/3/movie/tt0066921?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        // let response = await fetch(url);
        // let data = await response.json();
        // this.setState({ movie: data, loading: false })
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })

        let url = 'https://api.themoviedb.org/3/movie/tt0066921?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data })

        let url1 = 'https://api.themoviedb.org/3/movie/tt0118694?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response1 = await fetch(url1);
        let data1 = await response1.json();
        this.setState({ movie1: data1 })

        let url2 = 'https://api.themoviedb.org/3/movie/tt0169547?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        this.setState({ movie2: data2 })

        let url3 = 'https://api.themoviedb.org/3/movie/tt0117951?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        this.setState({ movie3: data3 })

        let url4 = 'https://api.themoviedb.org/3/movie/tt0246578?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response4 = await fetch(url4);
        let data4 = await response4.json();
        this.setState({ movie4: data4 })

        let url5 = 'https://api.themoviedb.org/3/movie/tt0457430?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response5 = await fetch(url5);
        let data5 = await response5.json();
        this.setState({ movie5: data5 })

        let url6 = 'https://api.themoviedb.org/3/movie/tt0103772?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1;'
        let response6 = await fetch(url6);
        let data6 = await response6.json();
        this.setState({ movie6: data6 })
    }

    render() {
        return (
            <div className="TopRated">
                <h1>Editor's Picks </h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                >

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie.vote_average}/10
                                </h3>

                        </div>
                    </div>

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie1.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie1.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie1.vote_average}/10
                                </h3>

                        </div>
                    </div>

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie2.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie2.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie2.vote_average}/10
                                </h3>

                        </div>
                    </div>

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie3.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie3.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie3.vote_average}/10
                                </h3>

                        </div>
                    </div>

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie4.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie4.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie4.vote_average}/10
                                </h3>

                        </div>
                    </div>

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie5.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie5.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie5.vote_average}/10
                                </h3>

                        </div>
                    </div>

                    <div className="popular-details">
                        <div className="image">
                            <img src={this.state.poster + this.state.movie6.poster_path} alt="" />
                        </div>

                        <div className="details">
                            <h2>{this.state.movie6.title}</h2>
                            <h3>
                                <i class="fas fa-star"></i> {this.state.movie6.vote_average}/10
                                </h3>

                        </div>
                    </div>


                </Carousel>
            </div>
        )
    }
}

export default EditorsPickMovie