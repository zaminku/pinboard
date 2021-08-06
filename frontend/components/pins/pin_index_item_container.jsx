import { connect } from "react-redux";
import PinIndexItem from "./pin_index_item";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({

})

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(PinIndexItem);