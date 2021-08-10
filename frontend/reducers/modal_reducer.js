import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const nullModal = { type: null, pinId: null}
const modalReducer = (state = nullModal, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {type: action.modal, pinId: action.pinId}
        case CLOSE_MODAL:
            return nullModal;
        default:
            return state;
    }
}

export default modalReducer;