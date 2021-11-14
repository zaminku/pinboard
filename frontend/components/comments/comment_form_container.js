import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = ({ entities, errors }) => ({
    errors: errors.comments,
    pins: entities.comments
})

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))

})

export default connect(mSTP, mDTP)(CommentForm);