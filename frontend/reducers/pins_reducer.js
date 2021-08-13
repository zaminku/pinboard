import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN  } from "../actions/pin_actions";
import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import { RECEIVE_BOARDS_PIN } from "../actions/boards_pin_actions";

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;   
        case RECEIVE_PIN:
            newState[action.pin.id] = action.pin;
            return newState;
        case REMOVE_PIN:
            delete newState[action.pinId];
            return newState;
        case RECEIVE_BOARD:
            let pins = action.payload.pins;
            console.log("pins_reducer: ", action.payload);
            if (pins === undefined) {  //want to check if there are no pins, should be a key of pins
                return {};
            } else {
                return pins;
            }
        case RECEIVE_BOARDS:
            // to make sure that it doesn't flash the previous pins state (and flash the previous pins from the pins state on a board)...
            // return {}; 
        // case RECEIVE_BOARDS_PIN:
            // newState[action.payload.pinId] = action.payload // WIP
        default:
            return state;
    }
}

export default pinsReducer;