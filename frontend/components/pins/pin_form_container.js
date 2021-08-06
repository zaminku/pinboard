import { connect } from "react-redux";
import { createPin } from "../../actions/pin_actions";
import PinForm from "./pin_form";

const mSTP = ({errors}) => ({
    errors: errors.pins
})

const mDTP = dispatch => ({
    createPin: pin => dispatch(createPin(pin))
})

export default connect(mSTP, mDTP)(PinForm);