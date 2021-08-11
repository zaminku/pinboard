import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import PinEditFormContainer from '../pins/pin_edit_form_container';
import BoardFormContainer from '../boards/board_form_container';
import BoardEditFormContainer from '../boards/board_edit_form_container';

function Modal({ modal, itemId }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'editPin':
            component = <PinEditFormContainer pinId={itemId}/>;
            break;
        case 'createBoard':
            component = <BoardFormContainer />;
            break;
        case 'editBoard':
            component = <BoardEditFormContainer boardId={itemId}/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal.type,
        itemId: state.ui.modal.itemId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);