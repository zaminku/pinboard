import React from "react";
import PinEditFormContainer from "./pin_edit_form_container";
import { Link } from "react-router-dom";

class PinShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    componentWillUnmount() {
        this.props.closeModal();
    }

    render() {
        const {pin, pinId, currentUserId, openModal} = this.props;
        if (pin === undefined) {
            return null;
        }

        return(
            <div>
                <Link to="/">Home page</Link>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                <img className="pin-pic" src={pin.photoUrl} />

                {
                    (currentUserId === pin.userId) ? (
                        <div>
                            {/* <PinEditFormContainer pin={pin} /> */}
                            <button onClick={() => openModal('editPin', pinId)}>Edit this pin</button>
                        </div>
                    ) : <div></div>
                }
            </div>
        )
    }
}

export default PinShow;