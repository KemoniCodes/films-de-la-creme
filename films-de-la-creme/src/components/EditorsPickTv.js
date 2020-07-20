import React, { Component } from 'react'
import '../css/EditorsPickTv.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class EditorsPickTv extends React.Component {
    state = {
        loading: true,
        movie: [], //initializing state for multiple movies based on id 
        movie1: [],
        movie2: [],
        movie3: [],
        movie4: [],
        movie5: [],
        movie6: [],
        poster: ''
    }

    async componentDidMount() {

        //to fetch images
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] })

        //to fetch first movie based on id
        let url = 'https://api.themoviedb.org/3/find/tt0434706?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ movie: data.tv_results[0] })

        let url1 = 'https://api.themoviedb.org/3/find/tt0213338?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response1 = await fetch(url1);
        let data1 = await response1.json();
        this.setState({ movie1: data1.tv_results[0] })

        let url2 = 'https://api.themoviedb.org/3/find/tt0452046?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        this.setState({ movie2: data2.tv_results[0] })

        console.log(this.state.movie2)

        let url3 = 'https://api.themoviedb.org/3/find/tt2244495?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        this.setState({ movie3: data3.tv_results[0] })

        let url4 = 'https://api.themoviedb.org/3/find/tt0397442?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response4 = await fetch(url4);
        let data4 = await response4.json();
        this.setState({ movie4: data4.tv_results[0] })

        let url5 = 'https://api.themoviedb.org/3/find/tt0159206?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response5 = await fetch(url5);
        let data5 = await response5.json();
        this.setState({ movie5: data5.tv_results[0] })

        let url6 = 'https://api.themoviedb.org/3/find/tt1710308?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&external_source=imdb_id'
        let response6 = await fetch(url6);
        let data6 = await response6.json();
        this.setState({ movie6: data6.tv_results[0] })
    }

    render() {
        return (
            <div className="TopRated">
                <h1>Editor's Picks </h1>

                <Carousel
                    slidesPerPage={5}
                    arrows
                    infinite
                    breakpoints={{
                        640: {
                            slidesPerPage: 2,
                            arrows: true
                        },
                        900: {
                            slidesPerPage: 4,
                            arrows: true
                        }

                    }}
                >
                    <a href={
                        `/tv/${this.state.movie.id}`
                    }>
                        <div className="popular-details">

                            {/* poster container */}
                            <div className="image">
                                <img src={this.state.poster + this.state.movie.poster_path} alt="" />
                            </div>

                            <div className="details">

                                {/* movie details container */}
                                <h2>{this.state.movie.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>

                    <a href={
                        `/tv/${this.state.movie1.id}`
                    }>
                        <div className="popular-details">
                            <div className="image">
                                <img src={this.state.poster + this.state.movie1.poster_path} alt="" />
                            </div>

                            <div className="details">
                                <h2>{this.state.movie1.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie1.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>

                    <a href={
                        `/tv/${this.state.movie2.id}`
                    }>
                        <div className="popular-details">
                            <div className="image">
                                <img src={this.state.poster + this.state.movie2.poster_path} alt="" />
                            </div>

                            <div className="details">
                                <h2>{this.state.movie2.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie2.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>

                    <a href={
                        `/tv/${this.state.movie3.id}`
                    }>
                        <div className="popular-details">
                            <div className="image">
                                <img src={this.state.poster + this.state.movie3.poster_path} alt="" />
                            </div>

                            <div className="details">
                                <h2>{this.state.movie3.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie3.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>

                    <a href={
                        `/tv/${this.state.movie4.id}`
                    }>
                        <div className="popular-details">
                            <div className="image">
                                <img src={this.state.poster + this.state.movie4.poster_path} alt="" />
                            </div>

                            <div className="details">
                                <h2>{this.state.movie4.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie4.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>

                    <a href={
                        `/tv/${this.state.movie5.id}`
                    }>
                        <div className="popular-details">
                            <div className="image">
                                <img src={this.state.poster + this.state.movie5.poster_path} alt="" />
                            </div>

                            <div className="details">
                                <h2>{this.state.movie5.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie5.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>

                    <a href={
                        `/tv/${this.state.movie6.id}`
                    }>
                        <div className="popular-details">
                            <div className="image">
                                <img src={this.state.poster + this.state.movie6.poster_path} alt="" />
                            </div>

                            <div className="details">
                                <h2>{this.state.movie6.name}</h2>
                                <h3>
                                    <i class="fas fa-star"></i> {this.state.movie6.vote_average}/10
                            </h3>



                            </div>
                        </div>
                    </a>


                </Carousel>
            </div>
        )
    }
}

export default EditorsPickTv