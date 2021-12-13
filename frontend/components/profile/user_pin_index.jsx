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
        const pinItems = [];

        pins.forEach(pin => (
            (pin.userId === currentUserId) ? pinItems.push(<PinIndexItemContainer className="" pin={pin} key={pin.id} />) : null
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
                <h1 className="profile-pin-index-heading">Unorganized ideas</h1>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid your-pins"
                    columnClassName="my-masonry-grid_column"
                >
                    {pinItems}
                </Masonry>

            </div>
        )
    }
}

export default UserPinIndex;





{/* <div className="grid">
    {
        pins.map(pin => (
            (pin.userId === currentUserId) ? <UserPinIndexItem className="" pin={pin} key={pin.id} /> : <div key={pin.id}></div>
        ))
    }
</div> */}