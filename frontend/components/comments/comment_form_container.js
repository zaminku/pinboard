import { connect } from "react-redux";
import { createComment, fetchComments } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = ({ entities, session, errors }, ownProps) => ({
    errors: errors.comments,
    pins: entities.comments,
    userId: session.id,
    // pinId: ownProps.match.params.pinId
})

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: () => dispatch(fetchComments())
})

export default connect(mSTP, mDTP)(CommentForm);