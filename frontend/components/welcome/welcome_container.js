import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Welcome from "./welcome";
import { openModal } from "../../actions/modal_actions";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Welcome);