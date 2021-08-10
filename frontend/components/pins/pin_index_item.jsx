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
            <Link className="" to={`/pins/${pin.id}`}>
                <img className="pin-pic grid-item" src={pin.photoUrl} />
            </Link>
        )
    }
}

export default PinIndexItem