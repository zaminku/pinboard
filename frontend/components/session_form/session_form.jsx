import React from "react";
import { Redirect } from "react-router";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "", 
            firstName: "",
            lastName: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.closeModal())
            // .then((user) => this.props.history.push(`/`))
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        // if (this.props.errors) {
        //     return(<div className="session-errors">this.props.errors[0]</div>)
        // }
        return(
            <ul>
                {
                    this.props.errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))
                }
            </ul>
        )
    }

    handleDemoLogin(e) {
        e.preventDefault();
        // e.stopPropagation();
        let demoUser = {email: "sample@gmail.com", password: "123456"};
        this.props.processForm(demoUser)
            .then(() => this.props.closeModal())
            // .then((user) => this.props.history.push(`/`))
    }


    render() {
        const {formType, navLink, otherForm} = this.props;
        return(
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <label>
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="session-input"
                        placeholder="Email"
                    />
                </label>
                <br />
                {
                    (formType==="Sign up") ? (
                            <div>
                                <label>
                                    <input 
                                        type="text"
                                        value={this.state.firstName}
                                        onChange={this.update('firstName')}
                                        className="session-input"
                                        placeholder="First Name"
                                    />
                                </label>
                                <br />
                                <label>
                                    <input 
                                        type="text"
                                        value={this.state.lastName}
                                        onChange={this.update('lastName')}
                                        className="session-input"
                                        placeholder="Last Name"
                                    />
                                </label>
                                <br />
                            </div>
                        ) : (<div></div>)
                } 
                <label>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="session-input"
                        placeholder="Password"
                    />
                </label>
                <br />
                <button className="submit-button" type="submit">{formType}</button>
                {this.renderErrors()}
                {/* {navLink} */}
                {otherForm}
                <br />
                {formType==="Log in" ? <button onClick={this.handleDemoLogin}>Demo Login</button> : <div></div>}
            </form>
        )
    }
}

export default SessionForm;