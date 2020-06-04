import React from 'react'
import '../css/App.css'



class Home extends React.Component {
    state = {
        loading: true,
        movie: []
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.results[4], loading: false })
    }

    render() {

        return (

            <div className="home">
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>MOVIES</li>
                        <li>TV SHOWS</li>
                        <li id="logo">
                            <img src={require("../img/food-and-restaurant.png")} alt="" />
                        </li>
                        <li>SEARCH</li>
                        <li>PROFILE</li>
                        <li id="last">LOG OUT</li>
                    </ul>
                </nav>

                <div className="now-playing-details">
                    <h1 className="title">{this.state.movie.title} <span className="date"> ({this.state.movie.release_date}) </span> </h1>
                    <h2>{this.state.movie.vote_average}/10 {this.state.movie.vote_count} reviews</h2>

                    <p>{this.state.movie.overview}</p>
                </div>

            </div >

        )
    }
}

export default Home


