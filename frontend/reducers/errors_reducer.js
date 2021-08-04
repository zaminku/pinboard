import { combineReducers } from "redux";
import pinsErrorsReducer from "./pins_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    pins: pinsErrorsReducer
})

export default errorsReducer