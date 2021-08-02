import { connect } from "react-redux"
import SessionForm from "./session_form"

const mSTP = ({errors}, ownProps) => ({
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Already a member? Log in</Link>
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)