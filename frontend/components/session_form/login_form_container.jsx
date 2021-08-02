import { connect } from "react-redux"
import SessionForm from "./session_form"
import React from "react"
import { Link } from "react-router-dom"
import { login } from "../../actions/session_actions"

const mSTP = ({errors}, ownProps) => ({
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">Not on Pinboard yet? Sign up now</Link>
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)