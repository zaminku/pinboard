import { RECEIVE_BOARD_ERRORS, CLEAR_BOARD_ERRORS,RECEIVE_BOARD, RECEIVE_BOARDS  } from "../actions/board_actions";

const boardsErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        case CLEAR_BOARD_ERRORS:
            return [];
        case RECEIVE_BOARDS:
            return [];
        case RECEIVE_BOARD:
            return [];
        default:
            return state;
    }
}

export default boardsErrorsReducer;