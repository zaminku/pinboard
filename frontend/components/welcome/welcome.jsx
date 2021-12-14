import React from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchPin(this.props.pinId);
        // this.props.fetchUsers();
        // console.log("props: ", this.props)
    }

    render() {
        const {openModal} = this.props;
        return (
            <div className="welcome">
                <div className="welcome-heading">Welcome to Pinboard</div>
                <button className="get-started-btn" onClick={() => openModal('login')}>Get Started</button>
            </div>
        )
    }
}

export default Welcome;