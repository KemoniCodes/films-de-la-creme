import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import app from "../firebase.js";
import '../css/App.css'




class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            // showHide: false,
            isExpanded: false //initializing state for mobile hamburger nav
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
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
        const { isExpanded } = this.state;
        return (
            < div className="home" >
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <a href="/" className="active"><li >HOME</li></a>
                        <a href='/movies' className="active"><li>MOVIES</li></a>
                        <a href="/tv" className="active"><li>TV SHOWS</li></a>
                        <li id="logo">
                            <a href="/">
                                <img src={require("../img/food-and-restaurant.png")} alt="" />
                            </a>
                        </li>
                        <Link to='/search' className="active"><li > SEARCH</li></Link>
                        <li className="active">PROFILE</li>
                        <li id="last" className="active"><Link to='/SignIn' onClick={() => app.auth().signOut()}>LOG OUT</Link></li>
                    </ul>
                </nav>
            </div >
        )
    }
}

export default NavBar


