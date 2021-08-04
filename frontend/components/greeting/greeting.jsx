import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <nav className="login-signup top-nav-item">
            {/* <Link className="login-button" to="/login">Log in</Link>
            <Link className="signup-button" to="/signup">Sign up</Link> */}

            <button className="greeting-button login" onClick={() => openModal('login')}>Log in</button>
            {/* &nbsp;or&nbsp; */}
            <span>     </span>
            <button className="greeting-button signup" onClick={() => openModal('signup')}>Sign up</button>
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