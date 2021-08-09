import React from "react";
import PinEditFormContainer from "./pin_edit_form_container";
import { Link } from "react-router-dom";

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {pin} = this.props;
        return(
            <li>
                <Link to={`/pins/${pin.id}`}>
                    <img className="pin-pic" src={pin.photoUrl} />
                </Link>
            </li>
        )
    }
}

export default PinIndexItem