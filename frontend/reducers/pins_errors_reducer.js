import { RECEIVE_PINS, RECEIVE_PIN, RECEIVE_PIN_ERRORS, CLEAR_PIN_ERRORS } from "../actions/pin_actions";

const pinsErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PIN_ERRORS:
            return action.errors;
        case RECEIVE_PINS:
            return [];
        case RECEIVE_PIN:
            return [];
        case CLEAR_PIN_ERRORS:
            return [];
        default:
            return state;
    }
}

export default pinsErrorsReducer;