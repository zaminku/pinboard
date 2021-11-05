import { RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS, RECEIVE_COMMENT, RECEIVE_COMMENTS} from "../actions/board_actions";

const commentsErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_COMMENT_ERRORS:
            return [];
        case RECEIVE_COMMENTS:
            return [];
        case RECEIVE_COMMENT:
            return [];
        default:
            return state;
    }
}

export default commentsErrorsReducer;