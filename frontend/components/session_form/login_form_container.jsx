import { connect } from "react-redux"
import SessionForm from "./session_form"
import React from "react"
import { Link } from "react-router-dom"
import { login, clearErrors } from "../../actions/session_actions"
import { openModal, closeModal } from "../../actions/modal_actions"
import { fetchUsers } from "../../actions/user_actions";

const mSTP = ({errors, session}, ownProps) => ({
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">Not on Pinboard yet? Sign up now</Link>,
    currUserId: session.id,
    history: ownProps.history
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button className="other-form-button" onClick={() => dispatch(openModal('signup'))}>
            Not on Pinboard yet? Sign up now
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(SessionForm)