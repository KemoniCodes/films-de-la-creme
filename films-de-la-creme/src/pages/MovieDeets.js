import React from 'react'
import axios from 'axios'


class MovieDeets extends React.Component {
    state = {
        loading: true,
        movie: [],
        tv: [],
        movie_id: this.props.match.params.id,
        tv_id: this.props.match.params.show_id,
        match: false,
        poster: '',
        name: "React",
        query: ''
    }

    async componentDidMount() {
        let id = this.state.movie_id
        console.warn(id)
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data, loading: false })
        this.setState({ movie_id: data.id, loading: false })

        let _id = this.state.tv_id
        console.warn(_id)
        let url1 = `https://api.themoviedb.org/3/tv/${_id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`;
        let response1 = await fetch(url1);
        let data1 = await response1.json();
        this.setState({ tv: data1, loading: false })
        this.setState({ tv_id: data1.show_id, loading: false })

        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })


        // console.warn(data.backdrop_path)
        // const query = event.target.value;
        // this.setState({ query: query, loading: true})
    }

    // fetchData(id = this.props.match.params.type) {
    //     let url = (`https://api.themoviedb.org/3/movie/${id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`);
    //     let response = fetch(url);
    //     let data = response.json();
    //     this.setState({ movie: data, loading: false })
    // }



    render() {
        return (
            <div className="MovieDeets">
                {/* {this.state.movie.map((movie, i) => { */}
                {/* return ( */}

                <div className="popular-details">
                    <div className="image">
                        <img src={this.state.poster + this.state.movie.backdrop_path} alt="" />
                        <img src={this.state.poster + this.state.tv.backdrop_path} alt="" />
                    </div>

                    <div className="details">
                        <h2>{this.state.movie.title}</h2>
                        <h2>{this.state.tv.name}</h2>

                        {/* <h2>{this.state.tv.name}</h2> */}
                        <h3>
                <i class="fas fa-star"></i> {this.state.movie.vote_average}{this.state.tv.vote_average}/10
                        </h3>
                        <ul>
                            <li>
                                <i class="fas fa-plus"></i>
                            </li>
                            <li>Add to List</li>
                        </ul>
                    </div>
                </div>
                {/* ) */}
                {/* // }

                // )
                // } */}
            </div>
        )
    }

}

export default MovieDeets