import React from 'react'
import '../css/App.css'



class Home extends React.Component {

    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    render() {

        return (

            <div className="home">
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>MOVIES</li>
                        <li>TV SHOWS</li>
                        <li id="logo">
                            <img src={require("../img/food-and-restaurant.png")} alt="" />
                        </li>
                        <li>SEARCH</li>
                        <li>PROFILE</li>
                        <li id="last">LOG OUT</li>
                    </ul>
                </nav>

            </div >

        )
    }
}

export default Home


