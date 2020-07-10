import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import app from "../firebase.js";
import '../css/App.css'




class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            showHide: true,
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
        const options = ["PROFILE", "watchlist's"]
        return (
            < div className="home" >
                {/* <div>
                    {showHide && <SearchBar />}
                    <hr />
                </div> */}

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
                        <Link to='/search'><li > SEARCH</li></Link>
                        <li>PROFILE</li>
                        <li id="last"><Link to='/SignIn' onClick={() => app.auth().signOut()}>LOG OUT</Link></li>
                    </ul>
                </nav>
            </div >
        )
    }
}

export default NavBar
