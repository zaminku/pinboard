import React from "react";


class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {pin} = this.props;
        return(
            <li>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                <img src={`${pin.pinUrl}`}/>
            </li>
        )
    }
}

export default PinIndexItem