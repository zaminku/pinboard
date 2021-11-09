import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { fetchComments } from "../../actions/comment_actions"
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({ entities }) => ({
    comments: Object.values(entities.comments)
})

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(CommentIndex)