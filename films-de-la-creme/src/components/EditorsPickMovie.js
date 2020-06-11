import React, { Component } from 'react'
import '../css/TopRatedMovie.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class EditorsPickMovie extends React.Component {
    state = {
        loading: true,
        movie: [],
        poster: '',
        external_id: ['tt0118694', 'tt0066921', 'tt0169547', 'tt0117951', 'tt0246578', 'tt0457430', 'tt0103772']
    }

    async componentDidMount() {
        // let id = data.movie_results
        let url = "https://api.themoviedb.org/3/find/{external_id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ external_id: data.movie_results, loading: false })
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })
    }

    render() {
        return (
            <div className="TopRated">
                <h1>Editor's Picks <span>Explore All</span></h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                >

                    {this.state.external_id.map((id, i) => {
                        return (
                            <div className="popular-details">
                                <div className="image">
                                    <img src={this.state.poster + id.poster_path} alt="" />
                                </div>

                                <div className="details">
                                    <h2>{id.title}</h2>
                                    <h3>
                                        <i class="fas fa-star"></i> {id.vote_average}/10
                                    </h3>
                                    <h3>{id.release_date}</h3>

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                </Carousel>
            </div>
        )
    }
}

export default EditorsPickMovie