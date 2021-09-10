import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = ({entities, session}, ownProps) => ({
    currentUserId: session.id,
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => {

}

export default connect(mSTP, null)(Profile)