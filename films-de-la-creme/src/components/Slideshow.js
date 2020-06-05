import React from 'react'
import '../css/App.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Slideshow extends React.Component {
    state = {
        loading: true,
        movie: [],
        bg: []
    }

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let response = await fetch(url);
        let res = await fetch(config);
        let data = await response.json();
        let image = await res.json();
        this.setState({ movie: data.results[4], loading: false })
        this.setState({ bg: image.images.base_url + image.images.backdrop_sizes[2] + data.results[4].poster_path })
    }

    // id = "container"
    // style = "background-image: url('{{image ['images'] ['base_url'] }}{{image ['images'] ['backdrop_sizes'] [2] }}{{ data ['results'] [4] ['poster_path'] }}')"
    render() {

        return (


            <div className="Slideshow">
                <Carousel
                    infinite
                    dots
                >
                    <div className="now-playing-details">
                     
                        <div className="details">
                            <h1 className="title">{this.state.movie.title} <span className="date"> ({this.state.movie.release_date}) </span> </h1>
                            <h2>{this.state.movie.vote_average}/10    <span>{this.state.movie.vote_count} reviews </span></h2>

                            <p>{this.state.movie.overview}</p>
                        </div>

                        <div className="image">
                            <img src={this.state.bg} alt="" />
                        </div>

                    </div>

                    <div className="now-playing-details">
                      
                        <div className="details">
                            <h1 className="title">{this.state.movie.title} <span className="date"> ({this.state.movie.release_date}) </span> </h1>
                            <h2>{this.state.movie.vote_average}/10    <span>{this.state.movie.vote_count} reviews </span></h2>

                            <p>{this.state.movie.overview}</p>
                        </div>

                        <div className="image">
                            <img src={this.state.bg} alt="" />
                        </div>


                    </div>
                </Carousel >
            </div >


        )
    }
}

export default Slideshow