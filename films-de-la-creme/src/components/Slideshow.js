import React from 'react'
import '../css/Slideshow.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Slideshow extends React.Component {
    state = {
        loading: true,
        movie: [], //initializing state for movies
        bg: '',
    }


    async componentDidMount() {
        //to fetch now playing movies
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.results, loading: false })

        //tp fetch images
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ bg: image.images.secure_base_url + image.images.backdrop_sizes[3] })
    }


    render() {
        return (
            <div className="Slideshow" >
                <Carousel
                    infinite
                    dots
                    autoPlay={4000}
                    animationSpeed={2000}
                >

                    {/* iterating through the 'movie' state's array retreiving the now playing movies */}
                    {this.state.movie.map((movie, i) => {

                        return (

                            <div className="now-playing-details">

                                <div className="details">
                                    <h2>Now Playing</h2>
                                    <h1 className="title"> {movie.title} <span className="date"> ({movie.release_date}) </span> </h1>
                                    <h2>{movie.vote_average}/10 <span>{movie.vote_count} reviews </span></h2>

                                    <p>{movie.overview}</p>
                                </div>

                                < div className="image" >
                                    <img src={this.state.bg + movie.poster_path} alt="" />

                                </div>
                            </div>
                        )
                    }

                    )
                    }

                </Carousel >
            </div >
        )
    }

}

export default Slideshow