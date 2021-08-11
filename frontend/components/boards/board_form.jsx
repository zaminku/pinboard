import React from "react";
import { withRouter } from "react-router-dom";

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillUnmount() {
        this.props.clearBoardErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state)
            // .then(() => this.props.closeModal());
            .then((board) => {
                return this.props.history.push(`/boards/${Object.keys(this.props.boards)[(Object.keys(this.props.boards).length - 1)]}`)
            });
    }

    renderErrors(e) {
        if (this.props.errors[0]) {
            if (this.props.errors[0] === "Name can't be blank") {
                return (<div className="board-errors">Don't forget to name your board!</div>)
            } else {
                return (<div className="board-errors">{this.props.errors[0]}</div>)
            }
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create board</h1>
                    <label>Name
                        <input 
                            type="text"
                            value={this.state.name}
                            placeholder='Like "Places to Go" or "Recipes to Make"'
                            onChange={this.update("name")}
                        />
                    </label>
                    {this.renderErrors()}
                    <br />

                    <button onClick={this.props.closeModal}>X</button>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default withRouter(BoardForm);