import React from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';

import '../css/SearchResults.css'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "React",
            query: '',
            results: {},
            loading: false,
            message: '',
            totalResutls: 0,
            totalPages: 0,
            currentPageNo: 0,
            poster: ''

        };
        this.cancel = '';
    }

    async componentDidMount() {
        let config = "https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154"
        const response = await fetch(config);
        const image = await response.json();
        this.setState({ poster: image.images.secure_base_url + image.images.poster_sizes[2] });
    }

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
                    loading: false
                })
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

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query: query, loading: true, message: '' }, () => {
            this.fetchSearchResults(1, query);
        })
    }

    renderSearchResults = () => {
        const { results } = this.state;


        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map(result => {
                        return (
                            <a key={result.id} href='' className='result-item'>
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
                    })}
                </div>
            )
        }

    }

    render() {
        return (
            <div className="SearchResults">
                <NavBar />
                <SearchBar />
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchResults