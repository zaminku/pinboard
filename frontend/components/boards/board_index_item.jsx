import React from "react";
import { Link } from "react-router-dom";

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {board, currentUserId} = this.props;
        return (
            <div>
                {
                    (currentUserId === board.userId) ? 
                        (
                            <div className="board-box-item">
                                <Link className="board-box-link" to={`/boards/${board.id}`}>
                                    {/* {board.name} */}
                                    <div className="board-box"></div>
                                    <h1 className="board-name">{board.name}</h1>
                                </Link>
                                {
                                    // (board.description) ?  (<li>{board.description}</li>) : (<div></div>)
                                }
                            </div>
                        ) : (<div></div>)
                }
            </div>
        )
    }
}

export default BoardIndexItem;