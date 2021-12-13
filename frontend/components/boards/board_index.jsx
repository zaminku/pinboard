import React from "react";
import BoardIndexItemContainer from "./board_index_item_container";

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        const {boards} = this.props;
        return(
            <div className="board-index-container">
                <h1 className="profile-boards-heading">Your Boards</h1>
                <div className="boards-index">
                    {
                        boards.map(board => (
                            <BoardIndexItemContainer board={board} key={board.id}/>
                        ))
                    }
                    <div className="board-box board-add" onClick={() => this.props.openModal("createBoard")}>+</div>
                </div>
            </div>
        )
    }
}

export default BoardIndex;