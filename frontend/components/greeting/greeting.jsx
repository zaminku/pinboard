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
            <div className="navbar-links">
                <i class="navbar-icon fab fa-linkedin"></i>
                <i class="navbar-icon fab fa-github" onClick="window.open('https://github.com/zaminku')"></i>
                <Link to={`/profile/${currentUser.id}`}><i class="navbar-icon user fas fa-user"></i></Link>
                <button className="greeting-button logout" onClick={logout}>Log out</button>
            </div>
        </hgroup>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;