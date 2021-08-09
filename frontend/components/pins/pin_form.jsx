import React from 'react';
import { Redirect } from 'react-router';

class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            photoUrl: null
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }
    
    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const pinFormData = new FormData();
        pinFormData.append('pin[title]', this.state.title);
        pinFormData.append('pin[description]', this.state.description);
        if (this.state.photoFile) {
            pinFormData.append('pin[photo]', this.state.photoFile);
        }

        this.props.createPin(pinFormData)
            .then((pin) => {
                return this.props.history.push(`/pins/${Object.keys(getState().entities.pins)[(Object.keys(getState().entities.pins).length - 1)]}`)
            });
    }

    renderErrors(e) {
        if (this.props.errors) {
            return (<div>{this.props.errors[0]}</div>)
        }
    }

    render() {
        const preview = this.state.photoUrl ? <img className="pin-preview" src={this.state.photoUrl} /> : null;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add a pin</h3>
                    <label>Title
                        <input 
                            type="text" 
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Add your title"
                        />
                    </label>
                    <br />
                    <label>Description
                        <input 
                            type="text" 
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Tell everyone what your Pin is about"
                        />
                    </label>
                    <br />
                    <input 
                        type="file" 
                        onChange={this.handleFile}
                    />
                    <br />
                    <h3>Image preview:</h3>
                    {preview}
                    <input type="submit" value="Save pin!"/>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default PinForm;