import React from "react";
import PinIndexItem from "./pin_index_item";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
    }

    render () {
        const {pins} = this.props;
        return (
            <div>
                <ul>
                    {
                        pins.map(pin => (
                            <PinIndexItem pin={pin} key={pin.id} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default PinIndex;