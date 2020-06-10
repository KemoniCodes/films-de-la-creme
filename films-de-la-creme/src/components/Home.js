import React, { Component } from 'react'
import '../css/App.css'
import Slideshow from './Slideshow'
import Footer from './Footer'


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <nav>
                    <ul>
                        <a href="/"><li >HOME</li></a>
                        <li>MOVIES</li>
                        <li>TV SHOWS</li>
                        <li id="logo">
                            <a href="/">
                                <img src={require("../img/food-and-restaurant.png")} alt="" />
                            </a>
                        </li>
                        <li>SEARCH</li>
                        <li>PROFILE</li>
                        <li id="last">LOG OUT</li>
                    </ul>
                </nav>
                <Slideshow />
                <Footer />
            </div >

        )
    }
}

export default Home


