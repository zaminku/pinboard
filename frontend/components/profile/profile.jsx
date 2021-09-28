import React from "react"
import { Link } from "react-router-dom";
import BoardIndexContainer from "../boards/board_index_container"

class Profile extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        const {currentUser, openModal} = this.props;
        if (currentUser === undefined) {
            return null;
        }

        return(
            <div>
                <Link to="/pins/new"><button className="create-pin-btn">+</button></Link>
                <div className="profile-user">
                    <div className="profile-pic-div"><i className="fas fa-user"></i></div>
                    <h1 className="profile-name">{currentUser.firstName} {currentUser.lastName}</h1>
                    <p className="profile-email">{currentUser.email}</p>
                    <p>{currentUser.bio}</p>
                </div>

                <BoardIndexContainer />
                <hr className="profile-hr"/>

            </div>
        )
    }
}

export default Profile;