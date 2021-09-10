import { connect } from "react-redux";
import Profile from "./profile";
import { openModal } from "../../actions/modal_actions";

const mSTP = ({entities, session}, ownProps) => ({
    currentUserId: session.id,
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    openModal: (type) => dispatch(openModal(type))
})

export default connect(mSTP, mDTP)(Profile)