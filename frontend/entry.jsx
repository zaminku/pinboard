import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import {login, logout, signup} from "./actions/session_actions";
import {fetchPins, fetchPin, createPin, updatePin, deletePin} from "./actions/pin_actions";
import {fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard} from "./actions/board_actions";
import {savePinToBoard} from "./util/boards_pin_api_util";
import {fetchComments, fetchComment, createComment} from "./actions/comment_actions";


document.addEventListener("DOMContentLoaded", () => {
    // set store and create preloadedState if none
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

    // to test session actions
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    // test pin actions
    window.fetchPins = fetchPins;
    window.fetchPin = fetchPin;
    window.createPin = createPin;
    window.updatePin = updatePin;
    window.deletePin = deletePin;

    // test board actions
    window.fetchBoards = fetchBoards;
    window.fetchBoard = fetchBoard;
    window.createBoard = createBoard;
    window.updateBoard = updateBoard;
    window.deleteBoard = deleteBoard;

    // test boardspin util
    window.savePinToBoard = savePinToBoard;
    
    // const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    //test comments actions
    window.fetchComments = fetchComments;
    window.fetchComment = fetchComment;
    window.createComment = createComment;
    
    // window variables for sample user and sample pin
    window.user = { email: "sample@gmail.com", username: "sample123", password: "123456", first_name: "Sample", last_name: "Name", age: 24, gender: "male", bio: "this is my sample account", language: "English", location: "Texas" }
    window.pin = {
        "id": 20,
        "title": "escalator",
        "description": "too many stairs"
    }

    window.board = {
        "user_id": 4,
        "name": "travel",
        "description": "places where I would like to travel"
    }

    window.comment = {
        "userId": 28,
        "pinId": 114,
        "text": "comment 2"
    }


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
})