import { connect } from "react-redux";
import PinIndex from "./pin_index";
import { fetchPins } from "../../actions/pin_actions"
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({entities}) => ({
    pins: Object.values(entities.pins)
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PinIndex)