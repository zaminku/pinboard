import React from "react";
import { Route, Link, Switch } from "react-router";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
    <div>
        <header>
            <h1>Pinboard from App</h1>
            <GreetingContainer />
        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
)

export default App;