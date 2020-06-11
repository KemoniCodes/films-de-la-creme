import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/App.css'



class NavBar extends React.Component {
    render() {
        return (
            <div className="home">
                <nav>
                    <ul>
                        <Link to="/"><li >HOME</li></Link>
                        <Link to='/movies'><li>MOVIES</li></Link>
                        <li>TV SHOWS</li>
                        <li id="logo">
                            <Link to="/">
                                <img src={require("../img/food-and-restaurant.png")} alt="" />
                            </Link>
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

export default NavBar
