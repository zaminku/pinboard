import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment } = this.props;
        return (
            <Link className="" to={`/comments/${comment.id}`}>
                <img className="comment-pic grid-item" src={comment.photoUrl} />
            </Link>
        )
    }
}

export default CommentIndexItem