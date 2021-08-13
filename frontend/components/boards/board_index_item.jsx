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
                            <div>
                                <li>
                                    <Link to={`/boards/${board.id}`}>{board.name}</Link>
                                </li>
                                    {
                                        (board.description) ?  (<li>{board.description}</li>) : (<div></div>)
                                    }
                            </div>
                        ) : (<div></div>)
                }
            </div>
        )
    }
}

export default BoardIndexItem;