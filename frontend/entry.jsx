import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

import {login, logout, signup} from "./actions/session_actions"


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    window.login = login;
    window.logout = logout;
    window.signup = signup;

    // const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    window.user = { email: "sample@gmail.com", username: "sample123", password: "123456", first_name: "Sample", last_name: "Name", age: 24, gender: "male", bio: "this is my sample account", language: "English", location: "Texas" }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
})