import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link className="login-button" to="/login">Log in</Link>
            <Link className="signup-button" to="/signup">Sign up</Link>
        </nav>
    )
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.firstName}!</h2>
            <button className="header-button" onClick={logout}>Log out</button>
        </hgroup>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;