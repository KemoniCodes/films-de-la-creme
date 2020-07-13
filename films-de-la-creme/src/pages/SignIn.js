import React, { useCallback, useContext } from "react";
import { Link } from 'react-router-dom'
import '../scss/signin.scss'
import { withRouter, Redirect } from "react-router";
import app from "../firebase.js";
import { AuthContext } from "../Auth.js";

const SignIn = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login">
            <h1>Sign In</h1>

            <p>*To demo: Email: demo@gmail.com    Password: demo4u* </p>


            <form onSubmit={handleLogin}>
                <label>
                    Email
          <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
          <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
            <p>Dont have an account? <Link to="/Register">Sign Up</Link> </p>
        </div>
    );
};

export default withRouter(SignIn);