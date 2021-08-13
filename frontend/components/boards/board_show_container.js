import { connect } from "react-redux";
import BoardShow from "./board_show";
import { fetchBoard, updateBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({entities, session}, ownProps) => ({
    boardId: ownProps.match.params.boardId,
    board: entities.boards[ownProps.match.params.boardId],
    pins: Object.values(entities.pins),
    currentUserId: session.id
})

const mDTP = dispatch => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    deleteBoard: () => dispatch(deleteBoard(ownProps.match.params.boardId)),
    fetchPins: () => dispatch(fetchPins()),
    openModal: (type, boardId) => dispatch(openModal(type, boardId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(BoardShow);