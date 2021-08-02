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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then((user) => this.props.history.push(`/`))
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
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

    render() {
        const {formType, navLink} = this.props;
        return(
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <label>Email:
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                <br />
                <label>First Name:
                    <input 
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update('firstName')}
                    />
                </label>
                <br />
                <label>Last Name:
                    <input 
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update('lastName')}
                    />
                </label>
                <br />
                <label>Password:
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <br />
                <button className="submit-button" type="submit">{formType}</button>
                {this.renderErrors()}
                {navLink}
            </form>
        )
    }
}

export default SessionForm;