import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comment } = this.props;
        console.log("ownProps: ", this.props.ownProps);
        return (
            <div>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default CommentIndexItem