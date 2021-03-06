import React from "react";
import PinIndexItemContainer from "./pin_index_item_container";
import PinFormContainer from "./pin_form_container";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
        // this.props.closeModal()
        //fetch all users here
    }

    render () {
        const {pins} = this.props;
        const pinItems = pins.map(pin => (
            <PinIndexItemContainer className="" pin={pin} key={pin.id} />
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
                {/* <button onClick={() => this.props.openModal("createBoard")}>Create a board!</button> */}
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
                            // pass users as a prop, so that you aren't fetching it every time you go on a pin
                            <PinIndexItemContainer className="" pin={pin} key={pin.id} />
                        ))
                    }
                </div> */}
            </div>
        )
    }
}

export default PinIndex;