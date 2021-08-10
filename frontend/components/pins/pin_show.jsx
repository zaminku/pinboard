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
            <div className="pin-show">
                <div className="pin-show-homepage">
                    <Link to="/">Home page</Link>
                </div>

                <div className="pin-show-box">
                    <img className="pin-show-pic" src={pin.photoUrl} />
                    <div className="pin-show-info">
                        {
                            (currentUserId === pin.userId) ? (
                                <div>
                                    {/* <PinEditFormContainer pin={pin} /> */}
                                    <button className="pin-show-edit-button" onClick={() => openModal('editPin', pinId)}>    ...    </button>
                                </div>
                            ) : <div></div>
                        }
                        <h1 className="pin-show-title">{pin.title}</h1>
                        <p className="pin-show-description">{pin.description}</p>
                        <a href={pin.pinUrl}>Link</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default PinShow;