import React from "react";
import { Route, Link, Switch } from "react-router";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PinIndexContainer from "./pins/pin_index_container";
import PinShowContainer from "./pins/pin_show_container";
import PinFormContainer from "./pins/pin_form_container"
import PinEditFormContainer from "./pins/pin_edit_form_container";
import BoardShowContainer from "./boards/board_show_container";
import BoardIndexContainer from "./boards/board_index_container";
import ProfileContainer from "./profile/profile_container";
import NavbarContainer from "./navbar/navbar_container";

const App = () => (
    <div>
        <Modal />

        <header className="logo-title">
            <div className="top-nav">
                {/* <img src="/../../app/assets/images/pinterest_logo.png"/> */}
                {/* <div className="logo-div nav">
                    <Link to="/">
                        <img className="logo-img top-nav-item" src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" />
                    </Link>
                    <Link to="/">
                        <h1 className="logo-name top-nav-item">Pinboard</h1>
                    </Link>
                </div> */}

                <NavbarContainer />
                <div className="greeting-container">
                    <GreetingContainer />
                </div>
            </div>
        </header>

        <Switch>
            <ProtectedRoute exact path="/" component={PinIndexContainer} />
            <ProtectedRoute exact path="/pins/new" component={PinFormContainer} />
            <ProtectedRoute path="/pins/:pinId" component={PinShowContainer} />
            <ProtectedRoute path="/boards/:boardId" component={BoardShowContainer} />
            <ProtectedRoute exact path="/boards/" component={BoardIndexContainer} />
            <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            {/* <AuthRoute exact path="/" component={PinIndexContainer} /> */}
        </Switch>
    </div>
)

export default App;