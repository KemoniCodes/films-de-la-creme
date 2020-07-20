import React from 'react'
import '../css/MovieDeets.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'


class PeopleDeets extends React.Component {
    state = {
        loading: true,
        people: [],
        people_id: this.props.match.params.id,
        director: [],
        cast: [],
        rec: [],
        match: false,
        poster: '',
        poster1: '',
        backdrop: '',
        name: "React",
    }

    async componentDidMount() {
        let id = this.state.people_id
        let url = `https://api.themoviedb.org/3/person/${id}?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ people: data, loading: false })
        this.setState({ people_id: data.id, loading: false })

        let url2 = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US`
        let response2 = await fetch(url2);
        let data2 = await response2.json();
        this.setState({ cast: data2.cast, loading: false })


        let url3 = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1`
        let response3 = await fetch(url3);
        let data3 = await response3.json();
        this.setState({ rec: data3.results, loading: false })


        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        let res = await fetch(config);
        let image = await res.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[3] })
        this.setState({ poster1: image.images.secure_base_url + image.images.poster_sizes[2] })
        this.setState({ backdrop: image.images.secure_base_url + image.images.backdrop_sizes[3] })
    }

    render() {

        let slides = this.state.cast.length < 5;
        return (
            <div className="MovieDeets">
                <NavBar />

                <h1 style={{ paddingTop: "20 rem" }}>{this.state.people.name} </h1>
                <div className="overview">
                    <div className="image">
                        <img src={this.state.poster + this.state.people.profile_path} alt="" />
                    </div>
                    <div className="overview-details">

                        <ul class="people">
                            <li>Known For: <span>{this.state.people.known_for_department}</span></li>
                            <li>Birthday: <span>{this.state.people.birthday}</span></li>
                            <li>Place of birth: <span>{this.state.people.place_of_birth}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="cast">
                    <div className="PopularTv">
                        <h1 id="people">Known For </h1>

                        <Carousel
                            slidesPerPage={slides ? this.state.cast.length : 5}
                            arrows
                            infinite
                        >

                            {this.state.cast.map((people, i) => {

                                return (
                                    <div className="popular-details">
                                        <div className="image">
                                            <img src={this.state.poster1 + people.poster_path} alt="" />
                                        </div>

                                        <div className="details">
                                            <h2>{people.character}</h2>
                                            <h2 id="media">{people.media_type}</h2>
                                            <h2 id="actor">{people.title}</h2>
                                        </div>
                                    </div>
                                )
                            }

                            )
                            }

                        </Carousel>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}

export default PeopleDeets