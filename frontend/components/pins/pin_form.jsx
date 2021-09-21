import React from 'react';
import { Redirect } from 'react-router';
// comment here
class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            pinUrl: "",
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
        pinFormData.append('pin[pinUrl]', this.state.pinUrl);
        if (this.state.photoFile) {
            pinFormData.append('pin[photo]', this.state.photoFile);
        }

        this.props.createPin(pinFormData)
            .then((pin) => {
                return this.props.history.push(`/pins/${Object.keys(this.props.pins)[(Object.keys(this.props.pins).length - 1)]}`)
            });
    }

    renderErrors(e) {
        if (this.props.errors) {
            return (<div className="pin-errors">{this.props.errors[0]}</div>)
        }
    }

    render() {
        const preview = this.state.photoUrl ? 
            <img className="pin-preview-img" src={this.state.photoUrl} /> : 
            <input
                type="file"
                className="pin-preview"
                onChange={this.handleFile}
            />;

        return(
            <div id="pin-form-container">
                <div id="pin-form">
                    <form className="pin-form" onSubmit={this.handleSubmit}>
                        <div id="pin-preview-box">
                            {preview}
                            <br />
                            {/* <input
                                type="file"
                                className="pin-img-input"
                                onChange={this.handleFile}
                            /> */}
                        </div>

                        <div className="pin-text-input">
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                                placeholder="Add your title"
                                className="pin-title-input"
                            />
                            <input 
                                type="text" 
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Tell everyone what your Pin is about"
                                className="pin-description-input"
                            />
                            <input 
                                type="text" 
                                value={this.state.pinUrl}
                                onChange={this.update('pinUrl')}
                                placeholder="Add a destination link"
                                className="pin-pinUrl-input"
                            />

                            <br />
                            {this.renderErrors()}
                            <br />
                            <input type="submit" value="Save" className="pin-submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PinForm;