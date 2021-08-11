import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const nullModal = { type: null, itemId: null}
const modalReducer = (state = nullModal, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {type: action.modal, itemId: action.itemId}
        case CLOSE_MODAL:
            return nullModal;
        default:
            return state;
    }
}

export default modalReducer;