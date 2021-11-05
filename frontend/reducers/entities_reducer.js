import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import pinsReducer from "./pins_reducer";
import boardsReducer from "./boards_reducer";
import commentsReducer from "./comments_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    pins: pinsReducer,
    boards: boardsReducer,
    comments: commentsReducer
})

export default entitiesReducer;