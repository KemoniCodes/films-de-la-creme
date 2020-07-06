import React from 'react'
import '../css/MovieDeets.css'

class MovieDeets extends React.Component {
    state = {
        loading: true,
        movie: [],
        tv: [],
        movie_id: this.props.match.params.id,
        movie_genre: [],
        match: false,
        poster: '',
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


        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[3] })
        this.setState({ backdrop: image.images.secure_base_url + image.images.backdrop_sizes[3] })
    }

    render() {
        return (
            <div className="MovieDeets">
                <div className="popular-details">
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
                        <img src={this.state.poster + this.state.movie.poster_path} alt="" />
                    </div>
                    <div className="overview-details">
                        <h3>{this.state.movie.tagline}</h3>
                        <p>{this.state.movie.overview}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieDeets