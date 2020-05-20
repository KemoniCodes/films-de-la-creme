import React from 'react'
import '../css/App.css'


class Home extends React.Component {
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
