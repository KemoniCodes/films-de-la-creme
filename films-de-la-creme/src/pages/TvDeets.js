import React from 'react'
import '../css/MovieDeets.css'

class TvDeets extends React.Component {
    state = {
        loading: true,
        movie: [],
        tv: [],
        tv_id: this.props.match.params.show_id,
        tv_genre: [],
        match: false,
        poster: '',
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
        console.warn(this.state.tv_genre)

        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.backdrop_sizes[2] })
    }

    render() {
        return (
            <div className="MovieDeets">
                <div className="popular-details">
                    <div className="image">
                        <img src={this.state.poster + this.state.tv.backdrop_path} alt="" />
                    </div>

                    <div className="details">
                        <h1>{this.state.tv.name}</h1>
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
            </div>
        )
    }

}

export default TvDeets