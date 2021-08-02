import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = Object.freeze({
    id: null
})

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let currUser = action.currentUser
            newState[id] = currUser.id;
            newState[email] = currUser.email;
            newState[firstName] = currUser.firstName;
            newState[lastName] = currUser.lastName;
            newState[gender] = currUser.gender;
            newState[bio] = currUser.bio;
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}

export default sessionReducer;