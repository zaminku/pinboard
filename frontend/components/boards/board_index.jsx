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
            <div>
                <h1>All your boards!</h1>
                <div className="boards-index">
                    {
                        boards.map(board => (
                            <BoardIndexItemContainer board={board} key={board.id}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BoardIndex;