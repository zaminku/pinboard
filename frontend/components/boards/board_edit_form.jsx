import React from "react";
import { withRouter } from "react-router-dom";

class BoardEditForm extends React.Component {
    constructor(props) {
        super(props);
        const board = this.props.board;
        this.state = {
            id: this.props.boardId,
            name: board.name,
            description: board.description
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId);
    }

    componentWillUnmount() {
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors(e) {
        if (this.props.errors) {
            return (<div className="board-edit-errors">{this.props.errors[0]}</div>)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
            .then(() => this.props.closeModal())
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteBoard(this.props.boardId)
            .then(() => this.props.history.push('/'))
    }

    render() {
        const {closeModal, board} = this.props;
        if (board === undefined) {
            return null;
        }
        return (
            <div>
                <form className="pin-edit-form-modal" onSubmit={this.handleSubmit}>
                    <div className="pin-edit-form-contents">
                        <h1 className="pin-edit-welcome">Edit your Board</h1>

                        <div className="pin-edit-form-text">
                            <input
                                type="text"
                                className="pin-title-edit"
                                value={this.state.name}
                                placeholder="Name"
                                onChange={this.update('name')}
                            />
                            <br />
                            <input
                                type="text"
                                className="pin-description-edit"
                                value={this.state.description}
                                placeholder="Description"
                                onChange={this.update('description')}
                            />
                            <br />
                        </div>
                        <div className="pin-edit-footer">
                            <button className="pin-edit-delete-button" onClick={this.handleDelete}>Delete</button>
                            <div className="pin-edit-footer-right">
                                <button className="pin-edit-cancel-button" onClick={this.props.closeModal}>Cancel</button>
                                <button className="pin-edit-save-button" type="submit">Save</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default BoardEditForm;