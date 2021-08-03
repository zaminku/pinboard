import React from "react";
import { Route, Link, Switch } from "react-router";

import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";



const App = () => (
    <div>
        <Modal />
        <header>
            <div className="top-nav">
                {/* <img src="/../../app/assets/images/pinterest_logo.png"/> */}
                <img className="logo" src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png"/>
                <h1 className="">Pinboard</h1>
            </div>
            <GreetingContainer />
        </header>

        <Switch>
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
    </div>
)

export default App;