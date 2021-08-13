import { connect } from "react-redux";
import BoardForm from "./board_form";
import { createBoard, clearBoardErrors } from "../../actions/board_actions";
import { closeModal } from "../../actions/modal_actions"


const mSTP = ({entities, errors}) => ({
    errors: errors.boards,
    boards: entities.boards
})

const mDTP = dispatch => ({
    createBoard: board => dispatch(createBoard(board)),
    clearBoardErrors: () => dispatch(clearBoardErrors()),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(BoardForm);