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
            .then(() => this.props.closeModal())
            .then(() => this.props.history.push('/'))
    }

    render() {
        const {closeModal} = this.props;
        if (pin === "undefined") {
            return null;
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="close-x"><span>X</span></div>
                    <h1>Edit this pin!</h1>
                    <br />
                    <label>Title
                        <input 
                            type="text"
                            value = {this.state.title}
                            placeholder = "Title"
                            onChange={this.update('title')}
                        />
                    </label>
                    <br />
                    <label>Description
                        <input 
                            type="text"
                            value = {this.state.description}
                            placeholder = "Description"
                            onChange={this.update('description')}
                        />
                    </label>
                    <br />
                    <button type="submit">Save edits</button>
                </form>
                <button onClick={this.handleDelete}>Delete this pin</button>
            </div>
        )
    }
}

export default withRouter(PinEditForm);