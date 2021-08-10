import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";


class PinEditForm extends React.Component {
    constructor(props) {
        super(props);
        const pin = this.props.pin
        this.state = {
            id: this.props.pinId,
            title: pin.title,
            description: pin.description,
            pinUrl: pin.pinUrl
        }
        
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    componentWillUnMount() {
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state)
            .then(() => this.props.closeModal())
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePin(this.props.pinId)
            .then(() => this.props.history.push('/'))
    }

    render() {
        const {closeModal, pin} = this.props;
        if (pin === "undefined") {
            return null;
        }
        

        return(
            <div>
                <form className="pin-edit-form-modal" onSubmit={this.handleSubmit}>
                    <div className="pin-edit-form-contents">
                        <h1 className="pin-edit-welcome">Edit this Pin</h1>
                        <img className="pin-edit-pic" src={pin.photoUrl} />

                        <div className="pin-edit-form-text">
                            <input 
                                type="text"
                                className="pin-title-edit"
                                value = {this.state.title}
                                placeholder = "Title"
                                onChange={this.update('title')}
                            />
                            <br />
                            <input 
                                type="text"
                                className="pin-description-edit"
                                value = {this.state.description}
                                placeholder = "Description"
                                onChange={this.update('description')}
                            />
                            <br />
                            <input 
                                type="text"
                                className="pin-pinUrl-edit"
                                value = {this.state.pinUrl}
                                placeholder = "Add a destination link"
                                onChange={this.update('pinUrl')}
                            />
                            <br />
                        </div>
                        <div className="pin-edit-footer">
                            <button className="pin-edit-delete-button" onClick={this.handleDelete}>Delete</button>
                            <div className="pin-edit-footer-right">
                                <button className="pin-edit-cancel-button" onClick={this.props.closeModal}>Cancel</button>
                                <button className="pin-edit-save-button" type="submit">Save</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(PinEditForm);