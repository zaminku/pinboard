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
            <div>
                <h1>All your boards!</h1>
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