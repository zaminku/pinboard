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
            <div>
                <Link to="/pins/new">Create a pin!</Link>
                <br />
                <ul>
                    {
                        pins.map(pin => (
                            <PinIndexItemContainer pin={pin} key={pin.id} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default PinIndex;