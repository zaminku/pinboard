import React from "react";
import pin_edit_form from "../pins/pin_edit_form";
import { Link } from "react-router-dom";
import PinIndexItemContainer from "../pins/pin_index_item_container";

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
        const {board, boardId, pins, currentUserId, openModal} = this.props;
        if (board === undefined) {
            return null;
        }

        return (
            <div className="board-show">
                <div className="board-show-homepage">
                    <Link to="/"><button>Home page</button></Link>
                </div>

                <div className="board-show-box">
                    <h1 className="board-title">{board.name}</h1>
                    {
                        (currentUserId === board.userId) ? (
                            <div className="board-show-edit-button-div" >
                                <button className="board-show-edit-button" onClick={() => openModal('editBoard', boardId)}>Edit board</button>
                            </div>
                        ) : <div></div>
                    }
                    <br />
                    {
                        pins.map(pin => (
                            <PinIndexItemContainer className="" pin={pin} key={pin.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BoardShow;