import * as APIUtil from "../util/boards_pin_api_util";
import { receiveBoardErrors } from "./board_actions";

export const RECEIVE_BOARDS_PIN = "RECEIVE_BOARDS_PIN";

const receiveBoardsPin = payload => ({
    type: RECEIVE_BOARDS_PIN,
    payload
})

export const createBoardsPin = (pinId, boardId) => (
    APIUtil.savePinToBoard(pinId, boardId)
        .then(payload => dispatch(receiveBoardsPin(payload)),
            err => dispatch(receiveBoardErrors(err.responseJSON)))
)