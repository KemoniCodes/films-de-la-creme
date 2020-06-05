import React, { Component } from 'react'
import '../css/App.css'
import Slideshow from './Slideshow'



class Home extends React.Component {
    render() {
        // let items = this.state.movie.map
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
                <Slideshow />
            </div >





        )
    }
}

export default Home


