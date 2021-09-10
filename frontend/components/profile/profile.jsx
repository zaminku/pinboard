import React from "react"

class Profile extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        const {currentUser} = this.props;
        return(
            <div>
                <i className="fas fa-user"></i>
                <h1 className="profile-name">{currentUser.firstName} {currentUser.lastName}</h1>

                <Link to="/boards/new"><button className="create-board-btn">+</button></Link>
            </div>
        )
    }
}

export default Profile;