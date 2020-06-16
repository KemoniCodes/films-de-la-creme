import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/App.css'
import SearchBar from './SearchBar';



class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            showHide: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHide":
                this.setState({ showHide: !this.state.showHide });
                break;
            // default:
            //     null;
        }
    }

    render() {
        const { showHide } = this.state;
        return (
            <div className="home">
                <div>
                    {showHide && <SearchBar />}
                    <hr />
                </div>

                <nav>
                    <ul>
                        <a href="/"><li >HOME</li></a>
                        <a href='/movies'><li>MOVIES</li></a>
                        <a href="/tv"><li>TV SHOWS</li></a>
                        <li id="logo">
                            <a href="/">
                                <img src={require("../img/food-and-restaurant.png")} alt="" />
                            </a>
                        </li>
                        <li onMouseDown={() => this.hideComponent("showHide")}> SEARCH</li>
                        <li>PROFILE</li>
                        <li id="last">LOG OUT</li>
                    </ul>
                </nav>
            </div >
        )
    }
}

export default NavBar
