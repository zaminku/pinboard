import { connect } from "react-redux";
import Profile from "./profile";
import { openModal } from "../../actions/modal_actions";
import { fetchPins } from "../../actions/pin_actions";

const mSTP = ({entities, session}, ownProps) => ({
    currentUserId: session.id,
    currentUser: entities.users[session.id],
    pins: Object.values(entities.pins)
})

const mDTP = dispatch => ({
    openModal: (type) => dispatch(openModal(type)),
    fetchPins: () => dispatch(fetchPins())
})

export default connect(mSTP, mDTP)(Profile)