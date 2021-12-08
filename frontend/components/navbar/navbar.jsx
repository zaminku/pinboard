import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="logo-div nav">
                <Link to="/">
                    <img className="logo-img top-nav-item" src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" />
                </Link>
                <Link to="/">
                    <h1 className="logo-name top-nav-item">Pinboard</h1>
                </Link>
            </div>
        )
    }
}

export default Navbar;