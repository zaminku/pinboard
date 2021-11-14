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

        return (
            <div id="comment-form-container">
                <div id="comment-form">
                    <form className="comment-form" onSubmit={this.handleSubmit}>
                        <div className="comment-text-input">
                            <input
                                type="text"
                                id="comment-input"
                                value={this.state.title}
                                onChange={this.update('text')}
                                placeholder="Add a comment"
                                className="comment-input"
                            />
                            <br />
                            {this.renderErrors()}
                            <br />
                            <input type="submit" value="Submit comment" className="comment-submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentForm;