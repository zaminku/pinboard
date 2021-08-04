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

        if (this.props.errors) {
            return (<div className="session-errors">{this.props.errors[0]}</div>)
        }
        // return(
        //     <ul>
        //         {
        //             this.props.errors.map((error, i) => (
        //                 <li key={i}>{error}</li>
        //             ))
        //         }
        //     </ul>
        // )
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
                <div onClick={this.props.closeModal} className="close-x"><span>X</span></div>
                <div>
                    <img className="form-logo" src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" />
                </div>

                <h1 className="session-form">Welcome to Pinboard</h1>

                <div>
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="email session-input"
                        placeholder="Email"
                    />                    
                </div>

                {
                    (formType==="Sign up") ? (
                        <div>
                            <input 
                                type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                className="first-name session-input"
                                placeholder="First Name"
                            />
                            <br />
                        </div>
                        ) : (<div></div>)
                } 
                {
                    (formType==="Sign up") ? (
                        <div>
                            <input 
                                type="text"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                className="last-name session-input"
                                placeholder="Last Name"
                            />
                            <br />
                        </div>
                        ) : (<div></div>)
                } 

                <div>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="password session-input"
                        placeholder="Password"
                    />
                </div>
                <br />
                <div className="session-errors">
                    {this.renderErrors()}
                </div>
                <div>
                    <button className="submit-button" type="submit">{formType}</button>
                    {formType === "Log in" ? (<div><p className="session-form">OR</p><button className="demo-button" onClick={this.handleDemoLogin}>Demo Log in</button></div>) : <div></div>}
                </div>
                <br />
                
                <div>
                    {otherForm}
                </div>

                <br />
            </form>
        )
    }
}

export default SessionForm;