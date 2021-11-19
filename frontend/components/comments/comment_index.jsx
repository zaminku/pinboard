import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";
import { Link } from "react-router-dom";
import CommentFormContainer from "./comment_form_container";

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
        const pinComments = comments.filter(pinComment => {
            // console.log("each comment's pinID: ", pinComment.pinId)
            // console.log("pinId: ", pinId) //.pinId === pinId);
            // console.log(pinComment.pinId == pinId)
            return pinComment.pinId == pinId
        })
        // console.log(pinComment) 
            
        // console.log("comments: ", comments)
        // console.log("pin comments: ", pinComments);
        
        if (pinComments === undefined) {
            return null;
        }

        return (
            <div className="comment-index">
                <br />
                <div className="grid">
                    {
                        pinComments.map((comment, idx) => (
                            <div>
                                {/* {console.log("current pinId: ", pinId)}
                                {console.log("comment pinId: ", comment.pinId)}
                                {console.log("comment: ", comment)} */}
                                {/* {(pinId === comment.pinId) ? (<CommentIndexItemContainer comment={comment} pinId={pinId} />) : (null) } */}
                                <CommentIndexItemContainer className="" commentUserId={comment.userId} comment={comment} key={comment.id} pinId={pinId} />
                            </div>
                        ))
                    }
                    <CommentFormContainer pinId={pinId} />
                </div>
            </div>
        )
    }
}

export default CommentIndex;