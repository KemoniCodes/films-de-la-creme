import React, { Component } from 'react'
import '../css/Movies.css'
import '../css/Slideshow.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


// 16

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
        this.setState({ movie: data.results[16], loading: false })
        this.setState({ bg: image.images.secure_base_url + image.images.backdrop_sizes[3] })

        console.log(this.state.movie[16])
    }

    render() {
        return (
            <div className="Movies">
                <NavBar />

                <div className="now-playing-details">

                    <div className="details">
                        {/* <h2>Latest</h2> */}
                        <h1 className="title"> {this.state.movie.title} <span className="date"> ({this.state.movie.release_date}) </span> </h1>
                        <h2>{this.state.movie.vote_average}/10 <span>{this.state.movie.vote_count} reviews </span></h2>

                        <p>{this.state.movie.overview}</p>
                    </div>

                    < div className="image" >
                        <img src={this.state.bg + this.state.movie.poster_path} alt="" />

                    </div>

                </div>

                <Footer />

            </div>
        )
    }
}

export default Movies