import React from "react";
import { Link } from "react-router-dom";

class UserPinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pin } = this.props;
        return (
            <Link className="" to={`/pins/${pin.id}`}>
                <img className="pin-pic grid-item" src={pin.photoUrl} />
            </Link>
            // <div>Hello!</div>
        )
    }
}

export default UserPinIndexItem
//