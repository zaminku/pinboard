import React from 'react';
import { Redirect } from 'react-router';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinId: this.props.pinId,
            userId: this.props.userId,
            text: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state)
        .then(() => {
            this.props.fetchComments()
            const commentInput = document.getElementById("comment-input");
            commentInput.value = "";
            })
    }

    renderErrors(e) {
        if (this.props.errors) {
            return (<div className="comment-errors">{this.props.errors[0]}</div>)
        }
    }

    render() {
        const { currentUserFirstName } = this.props;
        return (
            <div>
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <div className="comment-pic-input">
                        <div className="comment-profile-pic">{currentUserFirstName[0]}</div>
                        <input
                            type="text"
                            id="comment-input"
                            value={this.state.title}
                            onChange={this.update('text')}
                            placeholder="Add a public comment"
                            className="comment-input"
                        />
                    </div>
                    <div className="comment-submit-div">
                        <input type="submit" value="Done" className="comment-submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;