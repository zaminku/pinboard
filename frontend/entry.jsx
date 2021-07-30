import React from "react";
import ReactDOM from "react-dom";
import {login, logout, signup} from "./util/session_api_util"
// import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const store = configureStore();
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.user = { email: "sample@gmail.com", username: "sample123", password: "123456", first_name: "Sample", last_name: "Name", age: 24, gender: "male", bio: "this is my sample account", language: "English", location: "Texas" }
    ReactDOM.render(<h1>Welcome to Pinboard!</h1>, root)
})