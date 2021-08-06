import { connect } from "react-redux";
import { updatePin } from "../../actions/pin_actions";
import { closeModal } from "../../actions/modal_actions";
import PinEditForm from "./pin_edit_form";

const mSTP = state => ({

})

const mDTP = dispatch => ({
    updatePin: (pin) => dispatch(updatePin(pin)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PinEditForm)