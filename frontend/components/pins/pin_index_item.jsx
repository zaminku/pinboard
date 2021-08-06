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
                <img className="pin-pic" src={pin.photoUrl}/>
            </li>
        )
    }
}

export default PinIndexItem