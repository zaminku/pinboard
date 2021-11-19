import React from "react";
import { connect } from "react-redux";
import PinShow from "./pin_show";
import { fetchPin, updatePin, deletePin } from "../../actions/pin_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = ({entities, session}, ownProps) => ({
    pinId: ownProps.match.params.pinId,
    pin: entities.pins[ownProps.match.params.pinId],
    currentUserId: session.id
})

const mDTP = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    updatePin: (pin) => dispatch(updatePin(pin)),
    deletePin: () => dispatch(deletePin(ownProps.match.params.pinId)),
    openModal: (type, pinId) => dispatch(openModal(type, pinId)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(PinShow)