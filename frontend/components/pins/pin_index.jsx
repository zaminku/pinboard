import React from "react";
import PinIndexItemContainer from "./pin_index_item_container";
import PinFormContainer from "./pin_form_container";
import { Link } from "react-router-dom";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
        // this.props.closeModal()
    }

    render () {
        const {pins} = this.props;
        return (
            <div className="pin-index">
                <Link to="/pins/new">Create a pin!</Link>
                <button onClick={() => this.props.openModal("createBoard")}>Create a board</button>
                <br />
                <div className="grid">
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

export default PinIndex;