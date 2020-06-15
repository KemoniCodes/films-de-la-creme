import React from 'react';
import '../css/SearchBar.css'


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            query:'',
            results:{},
            loading: false,
            message:''
        };
    }

    render() {
        return (
            <div className="SearchBar">
                <form action="" method="POST">
                    <input name="input-search" type="text" className="search" placeholder=" Search for movie,tv show, or a person..." />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar