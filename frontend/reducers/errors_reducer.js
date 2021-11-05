import { combineReducers } from "redux";
import pinsErrorsReducer from "./pins_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import boardsErrorsReducer from "./boards_errors_reducer";
import commentsErrorsReducer from "./comments_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    pins: pinsErrorsReducer,
    boards: boardsErrorsReducer,
    commments: commentsErrorsReducer
})

export default errorsReducer