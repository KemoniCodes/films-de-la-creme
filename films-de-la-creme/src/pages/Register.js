import React, { useCallback } from "react";
import '../scss/register.scss'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import app from "../firebase.js";

const Register = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
          <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
          <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/SignIn">Sign In</Link> </p>
        </div>
    );
};

export default withRouter(Register);