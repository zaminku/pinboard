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
        this.props.createBoardsPin(this.props.pinId, this.props.board.id);
    }

    render() {
        const { board, currentUserId } = this.props;
        return (
            <div>
                {
                    (currentUserId === board.userId) ?
                        (
                            <div>
                                <button onClick={this.saveToBoard}>
                                    {board.name}
                                    {/* <Link to={`/boards/${board.id}`}>{board.name}</Link> */}
                                </button>
                            </div>
                        ) : (<div></div>)
                }
            </div>
        )
    }
}

export default BoardDropdownItem;