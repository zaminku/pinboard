import React from "react";
// import UserPinIndexItemContainer from "./user_pin_index_container";
import UserPinIndexItem from "./user_pin_index_item";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import PinIndexItemContainer from "../pins/pin_index_item_container";

class UserPinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
        // this.props.closeModal()
    }

    render() {
        const { pins, currentUserId } = this.props;

        const pinItems = pins.map(pin => (
            (pin.userId === currentUserId) ? <PinIndexItemContainer className="" pin={pin} key={pin.id} /> : <div key={pin.id}></div>
        ));
        const breakpointColumnsObj = {
            default: 8,
            2000: 7,
            1500: 6,
            1250: 5,
            1000: 4,
            750: 3,
            500: 2
        };

        return (
            <div className="pin-index">
                <Link to="/pins/new"><button className="create-pin-btn">+</button></Link>
                <h1>Unorganized ideas</h1>
                <button onClick={() => this.props.openModal("createBoard")}>Create a board!</button>
                {/* <Link to="/boards"><button>My boards</button></Link> */}
                <br />
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {pinItems}
                </Masonry>

                {/* <div className="grid">
                    {
                        pins.map(pin => (
                            (pin.userId === currentUserId) ? <UserPinIndexItem className="" pin={pin} key={pin.id} /> : <div key={pin.id}></div>
                        ))
                    }
                </div> */}
            </div>
        )
    }
}

export default UserPinIndex;