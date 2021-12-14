import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class BoardDropdownItem extends React.Component {
    constructor(props) {
        super(props);
        this.saveToBoard = this.saveToBoard.bind(this);
    }

    saveToBoard() {
        // console.log("pinId: ", this.props.pinId);
        // console.log("boardId: ", this.props.boardId);
        // console.log(this.props.board.id);
        this.props.createBoardsPin(this.props.pinId, this.props.board.id)
            // .then((user) => this.props.history.push(`/boards/${this.props.board.id}`))
        // return this.props.history.push(`/boards/${this.props.board.id}`);
    }

    render() {
        const { board, currentUserId } = this.props;
        return (
            <div className="board-dropdown-item">
                {
                    (currentUserId === board.userId) ?
                        (
                            <div>
                                <button className="add-pin-board pin-board-name" onClick={this.saveToBoard}>
                                    {board.name}
                                    {/* <Link className="pin-board-name" to={`/boards/${board.id}`}>{board.name}</Link> */}
                                </button>
                            </div>
                        ) : (<div></div>)
                }
            </div>
        )
    }
}

export default withRouter(BoardDropdownItem);