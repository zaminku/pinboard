import React from "react";
// import UserPinIndexItemContainer from "./user_pin_index_container";
import UserPinIndexItem from "./user_pin_index_item";
import { Link } from "react-router-dom";

class UserPinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
        // this.props.closeModal()
    }

    render() {
        const { pins, currentUserId } = this.props;
        return (
            <div className="pin-index">
                <Link to="/pins/new"><button className="create-pin-btn">+</button></Link>
                <h1>Unorganized ideas</h1>
                <button onClick={() => this.props.openModal("createBoard")}>Create a board!</button>
                <Link to="/boards"><button>My boards</button></Link>
                <br />
                <div className="grid">
                    {
                        pins.map(pin => (
                            (pin.userId === currentUserId) ? <UserPinIndexItem className="" pin={pin} key={pin.id} /> : <div key={pin.id}></div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default UserPinIndex;