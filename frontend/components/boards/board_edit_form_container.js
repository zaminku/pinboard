import { connect } from "react-redux";
import { fetchBoard, updateBoard, deleteBoard } from "../../actions/board_actions";
import { closeModal } from "../../actions/modal_actions";
import BoardEditForm from "./board_edit_form";

const mSTP = (state, ownProps) => ({
    boardId: state.ui.modal.itemId,
    board: state.entities.boards[state.ui.modal.itemId],
    history: ownProps.history
})

const mDTP = dispatch => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(BoardEditForm);