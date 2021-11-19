import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment, commentUser } = this.props;
        console.log("own props: ", this.props.comment);
        return (
            <div>
                <h4>{commentUser.firstName + " " + commentUser.lastName}</h4>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default CommentIndexItem