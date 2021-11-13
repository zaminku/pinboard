import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { openModal } from "../../actions/modal_actions";

const mSTP = ({ entities, session }, ownProps) => ({
    currentUserId: session.id
})

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(CommentIndexItem);