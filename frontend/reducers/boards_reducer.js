import { RECEIVE_BOARDS_PIN } from "../actions/boards_pin_actions";
import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from "../actions/board_actions";

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            // console.log("boards_reducer, payload returns: ", action.payload);
            newState[action.payload.board.id] = action.payload.board;
            return newState;
            // let boardId = action.payload.board.id;
            // let board = action.payload.board
            // return {[boardId]: board};
        case REMOVE_BOARD:
            delete newState[action.boardId];
            return newState;
        case RECEIVE_BOARDS_PIN:
            return newState[action.payload.boardId];
        default:
            return state;
    }
}

export default boardsReducer;