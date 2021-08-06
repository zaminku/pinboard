import * as APIUtil from "../util/pin_api_util";

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_PIN_ERRORS = "CLEAR_PIN_ERRORS";

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
})

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
})

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
})

export const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
})

export const clearPinErrors = () => ({
    type: CLEAR_PIN_ERRORS
})

export const fetchPins = () => dispatch => (
    APIUtil.fetchPins()
        .then(pins => dispatch(receivePins(pins)),
            err => dispatch(receivePinErrors(err.responseJSON)))
)

export const fetchPin = pinId => dispatch => (
    APIUtil.fetchPin(pinId)
        .then(pin => dispatch(receivePin(pin)),
            err => dispatch(receivePinErrors(err.responseJSON)))
)

export const createPin = pin => dispatch => (
    APIUtil.createPin(pin)
        .then(pin => dispatch(receivePin(pin)),
            err => dispatch(receivePinErrors(err.responseJSON)))
)

export const updatePin = pin => dispatch => (
    APIUtil.updatePin(pin)
        .then(pin => dispatch(receivePin(pin)),
            err => dispatch(receivePinErrors(err.responseJSON)))
)

export const deletePin = pinId => dispatch => (
    APIUtil.deletePin(pinId)
        .then(() => dispatch(removePin(pinId)),
            err => dispatch(receivePinErrors(err.responseJSON)))
)