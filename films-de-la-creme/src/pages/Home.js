import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/App.css'
import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'
import PopularMovie from '../components/PopularMovie'
import PopularTvShow from '../components/PopularTvShow'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';


class Home extends React.Component {

    state = {
        isActive: true,
        showHide1: true,
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHide1":
                this.setState({ showHide1: !this.state.showHide1 });
                break;
            // default:
            //     null;
        }
    }

    handleShow = () => {
        this.setState({ isActive: true });
    };

    handleHide = () => {
        this.setState({ isActive: false });
    };

    render() {
        const { showHide1 } = this.state;
        return (
            <div className="home">
                <NavBar onMouseDown={() => this.hideComponent("showHide1")} />
                {showHide1 && <Slideshow />}
                {showHide1 && <PopularMovie />}
                {showHide1 && <PopularTvShow />}
                <Footer />
            </div >

        )
    }
}

export default Home


