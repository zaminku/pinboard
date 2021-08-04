import { connect } from "react-redux";
import PinIndex from "./pin_index";

const mSTP = ({entities}) => ({
    pins: Object.values(entities.pins)
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(mSTP, mDTP)(PinIndex)