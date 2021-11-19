import * as APIUtil from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchUsers = () => disptach => (
    APIUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)