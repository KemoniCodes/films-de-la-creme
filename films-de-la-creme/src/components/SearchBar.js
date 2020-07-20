import React, { Link } from 'react';
import '../css/SearchBar.css'
import axios from 'axios'
import Loader from '../img/loader.gif'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "React",
            query: '', //initializing empty string for search query
            results: {}, //initializing empty array for results 
            loading: false,
            message: '',
            totalResutls: 0, //initializing results count
            totalPages: 0, //initializing results page count
            currentPageNo: 0,
            poster: '',
            showHide1: false,
        };
        this.cancel = '';
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHide1":
                this.setState({ showHide1: !this.state.showHide1 });
                break;
            // default:
            //     null;
        }
    }

    async componentDidMount() {
        //to fetch images
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        const response = await fetch(config);
        const image = await response.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] });
    }

    //function to get search results
    fetchSearchResults = (updatedPageNo = '', query) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&query=${query}${pageNumber}&include_adult=false`;

        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                const resultNotFoundMsg = !res.data.results.length
                    ? 'There are no search results. Please try a new search.'
                    : '';
                this.setState({
                    results: res.data.results,
                    message: resultNotFoundMsg,
                    loading: false,
                })

                console.warn(this.state.results)

            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data. Please check network'
                    })
                }
            })
    }

    //function to change qiery based on the variable query
    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query: query, loading: true, message: '' }, () => {
            this.fetchSearchResults(1, query);
        })
    }

    //function to get search results
    renderSearchResults = () => {
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">

                    {/* iterates through the results array */}
                    {results.map(result => {
                        return (

                            //links to movie deets page based on the media type and id
                            <a href={`/${result.media_type}/${result.id}`}
                            key={result.id}>

                                <div className="popular-details">
                                    <div className="image">
                                        <img src={this.state.poster + result.poster_path} alt="" />
                                        <img src={this.state.poster + result.profile_path} alt="" />
                                    </div>

                                    <div className="details">
                                        <h2>{result.name}</h2>
                                        <h2>{result.title}</h2>

                                        <h3>
                                            <i class="fas fa-star"></i> {result.vote_average}/10
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                    }
                </div>
            )
        }

    }

    render() {
        const { query, loading, message } = this.state;
        const { showHide1 } = this.state;

        return (
            <div className="SearchBar">
                <label className="search-label" htmlFor="input-search" method="POST">
                    <input name='query' type="text" className="search" placeholder=" Search for movie,tv show, or a person..." value={query} onChange={this.handleOnInputChange} /> {/* query will update anytime you type */}
                    <button type="submit"><i className="fas fa-search"></i></button>
                </label>

                {message && <p className="message">{message}</p>}

                <h1>Displaying Results for '{query}' </h1>

                {/* if image loading show loader gif if not hide loader gif */}
                <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />

                {/* loads results using funtion */}
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchBar