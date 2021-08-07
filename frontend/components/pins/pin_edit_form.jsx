import React from "react";


class PinEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: ,
            // description: ,
            // pinUrl: 
        }
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        const {closeModal} = this.props;
        console.log("hello is this working?")
        return(
            <div>
                <h1>HELLOOOOOOO!!!!!!</h1>
                {/* <form>
                    <label>Title
                        <input 
                            type="text"
                            value = {this.state.title}
                            placeholder = "Title"
                            onChange={this.update('title')}
                        />
                    </label>
                </form> */}
            </div>
        )
    }
}

export default PinEditForm;