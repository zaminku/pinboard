import { connect } from "react-redux";
import BoardIndexItem from "./board_index_item";
import { openModal } from "../../actions/modal_actions";

const mSTP = ({entities, session}, ownProps) => ({
    currentUserId: session.id
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    openModal: (type) => dispatch(openModal(type))
})

export default connect(mSTP, mDTP)(BoardIndexItem)