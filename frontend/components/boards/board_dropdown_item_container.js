import { connect } from "react-redux";
import BoardDropdownItem from "./board_dropdown_item";
import { openModal } from "../../actions/modal_actions";
import { createBoardsPin } from "../../actions/boards_pin_actions";
import { withRouter } from "react-router";

const mSTP = ({ entities, session }, ownProps) => ({
    boardId: ownProps.key,
    pinId: ownProps.match.params.pinId,
    currentUserId: session.id
})

const mDTP = dispatch => ({
    createBoardsPin: (pinId, boardId) => dispatch(createBoardsPin(pinId, boardId)),
    openModal: (type) => dispatch(openModal(type))
})

export default withRouter(connect(mSTP, mDTP)(BoardDropdownItem));