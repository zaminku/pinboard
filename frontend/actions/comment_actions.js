import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const fetchComments = () => dispatch => (
    APIUtil.fetchComments()
        .then(comments => dispatch(receiveComments(comments)),
            err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const fetchComment = commentId => dispatch => (
    APIUtil.fetchComment()
        .then(comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const updateComment = comment => dispatch => (
    APIUtil.updateComment()
        .then(comment => dispatch(updateComment(comment)),
            err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const deleteComment = commentId => dispatch => (
    APIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)),
            err => dispatch(receiveCommentErrors(err.responseJSON)))
)