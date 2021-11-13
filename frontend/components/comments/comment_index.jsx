import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";
// import CommentFormContainer from "./comment_form_container";
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments()
        // this.props.closeModal()
    }

    render() {
        const { comments, pinId } = this.props;
        const pinComments = comments.filter(pinComment => pinComment.pinId === this.props.pinId)
        console.log("props: ", this.props)
        return (
            <div className="comment-index">
                <Link to="/comments/new"><button className="create-comment-btn">+</button></Link>
                <button onClick={() => this.props.openModal("createBoard")}>Create a board!</button>
                <Link to="/boards"><button>My boards</button></Link>
                <br />
                <div className="grid">
                    {
                        pinComments.map(comment => (
                            <CommentIndexItemContainer className="" comment={comment} key={comment.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default CommentIndex;