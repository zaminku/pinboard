import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment, commentUserId } = this.props;
        return (
            <div>
                <h4>{commentUserId.firstName + " " + commentUserId.lastName}</h4>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default CommentIndexItem