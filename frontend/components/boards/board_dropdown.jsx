import React from "react";
import BoardDropdownItemContainer from "./board_dropdown_item_container";

class BoardDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        const { boards } = this.props;
        return (
            <div className="board-dropdown-index">
                <h1 className="add-pin-board-heading">Add to a board</h1>
                {/* We want to have the dropdown css here, and want to add classes here i guess?, let's see */}
                {/* use another class name insteead of boards-index; already used in board_index_item */}
                <div className="boards-index">
                    {
                        boards.map(board => (
                            <BoardDropdownItemContainer board={board} key={board.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BoardDropdown;