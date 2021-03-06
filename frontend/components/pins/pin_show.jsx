import React from "react";
import PinEditFormContainer from "./pin_edit_form_container";
import { Link } from "react-router-dom";
import BoardDropdownContainer from "../boards/board_dropdown_container";
import CommentIndexContainer from "../comments/comment_index_container"

class PinShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
        this.props.fetchUsers();
        // console.log("props: ", this.props)
    }

    componentWillUnmount() {
        this.props.closeModal();
    }

    render() {
        const {pin, pinId, currentUserId, openModal, users} = this.props;
        // const pinUser = users[pin.userId];
        // console.log("pinUser: ", pinUser)
        if (pin === undefined || users === undefined) {
            return null;
        }
        return(
            <div>
                <div className="pin-show">
                    <div className="pin-show-box">
                        <img className="pin-show-pic" src={pin.photoUrl} />
                        <div className="pin-show-info">
                            {
                                (currentUserId === pin.userId) ? (
                                    <div>
                                        <button className="pin-show-edit-button" onClick={() => openModal('editPin', pinId)}>...</button>
                                    </div>
                                ) : <div></div>
                            }

                            <h1 className="pin-show-title">{pin.title}</h1>
                            <p className="pin-show-description">{pin.description}</p>
                            {/* <p>{pinUser.firstName}</p> */}
                            <BoardDropdownContainer />

                            <CommentIndexContainer pinId={pinId}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PinShow;
