import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/App.css'
import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'
import PopularMovie from '../components/PopularMovie'
import PopularTvShow from '../components/PopularTvShow'
import NavBar from '../components/NavBar';


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <NavBar />
                <Slideshow />
                <PopularMovie />
                <PopularTvShow />
                <Footer />
            </div >

        )
    }
}

export default Home


