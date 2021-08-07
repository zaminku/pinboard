import React from "react";

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {pin, currentUserId, openModal} = this.props;
        return(
            <li>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                <img className="pin-pic" src={pin.photoUrl}/>
                {
                    (currentUserId === pin.userId) ? (
                        <button onClick={() => openModal('editPin')}>Edit this pin</button>
                    ) : <div></div>
                }
            </li>
        )
    }
}

export default PinIndexItem