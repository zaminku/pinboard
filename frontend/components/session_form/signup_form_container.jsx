import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { Link } from "react-router-dom";

const mSTP = ({errors, session}, ownProps) => ({
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Already a member? Log in</Link>,
    currUserId: session.id,
    history: ownProps.history
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)