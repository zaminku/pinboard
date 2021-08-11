import React from "react";
import pin_edit_form from "../pins/pin_edit_form";
import { Link } from "react-router-dom";

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId);
        this.props.closeModal();
    }

    componentWillUnmount() {
        this.props.closeModal();
    }

    render() {
        const {board, boardId, currentUserId, openModal} = this.props;
        if (board === undefined) {
            return null;
        }

        return (
            <div className="board-show">
                <div className="board-show-homepage">
                    <Link to="/">Home page</Link>
                </div>

                <div className="board-show-box">
                    <h1>{board.name}</h1>
                    {
                        (currentUserId === board.userId) ? (
                            <div>
                                <button className="board-show-edit-button" onClick={() => openModal('editBoard', boardId)}>Edit board</button>
                            </div>
                        ) : <div></div>
                    }
                </div>
            </div>
        )
    }
}

export default BoardShow;