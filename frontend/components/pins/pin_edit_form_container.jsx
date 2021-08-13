import { connect } from "react-redux";
import { fetchPin, updatePin, deletePin } from "../../actions/pin_actions";
import { closeModal } from "../../actions/modal_actions";
import PinEditForm from "./pin_edit_form";

const mSTP = (state, ownProps) => ({
    pinId: state.ui.modal.itemId,
    pin: state.entities.pins[state.ui.modal.itemId],
    history: ownProps.history
})

const mDTP = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    updatePin: (pin) => dispatch(updatePin(pin)),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PinEditForm)