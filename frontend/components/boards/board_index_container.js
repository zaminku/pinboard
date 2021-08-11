import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchBoards } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({entities}) => ({
    // may want to add currentUserId conditional here instead of render of boardindexitem
    boards: Object.values(entities.boards)
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(BoardIndex)