import React from 'react'

class SearchResults extends React.Component {
    state = {
        searchResults: null,
        page: 1
    }

    // Fetches initial search data
    componentDidMount() {
        this.props.searchData(`https://api.themoviedb.org/3/search/multi?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&query=${this.props.match.params.id}&page=1&include_adult=false`);
    }
    render() {
        return (
            <div className="SearchResults">


            </div>
        )
    }
}

export default SearchResults