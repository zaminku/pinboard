import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment, commentUser } = this.props;
        // console.log("own props: ", this.props.comment);
        return (
            <div className="comment-index-item">
                <div className="comment-profile-pic">{commentUser.firstName[0]}</div>
                <div className="comment-content">
                    <h4 className="comment-name">{commentUser.firstName + " " + commentUser.lastName}</h4>
                    <p className="comment-text">{comment.text}</p>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem