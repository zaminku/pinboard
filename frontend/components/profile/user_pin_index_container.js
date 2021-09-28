import { connect } from "react-redux";
import UserPinIndex from "./user_pin_index";
import { fetchPins } from "../../actions/pin_actions"
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({ entities, session }) => ({
    pins: Object.values(entities.pins),
    currentUserId: session.id
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(UserPinIndex)