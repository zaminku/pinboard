import React from "react";
import { Redirect } from "react-router";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "", 
            first_name: "",
            last_name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
            .then((user) => this.props.history.push(`/`))
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
                {
                    (formType==="Sign up") ? (
                            <div>
                                <label>First Name:
                                    <input 
                                        type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                    />
                                </label>
                                <br />
                                <label>Last Name:
                                    <input 
                                        type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                    />
                                </label>
                                <br />
                            </div>
                        ) : (<div></div>)
                } 
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
                <br />
                {formType==="Log in" ? <button onClick={this.handleDemoLogin}>Demo Login</button> : <div></div>}
            </form>
        )
    }
}

export default SessionForm;