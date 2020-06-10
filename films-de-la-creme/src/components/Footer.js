import React, { Component } from 'react'
import '../css/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <li>Designed & Developed by Kemoni 💘</li>
                <li>COPYRIGHT © 2020 Films De La Créme</li>
                <li id="img"><img src={require("../img/tmdb.png")} /></li>
            </div >
        )
    }
}

export default Footer