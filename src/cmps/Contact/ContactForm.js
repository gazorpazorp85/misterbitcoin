import React, { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.setFormDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.contact !== this.props.contact) this.setFormDataForEdit();
    }

    setFormDataForEdit() {
        const { contact } = this.props;
        if (contact) this.setState({ contact });
    }

    onSave = () => {
        this.props.onSave(this.state.contact);
    }

    goBack = () => {
        (this.props.contact) ?
            this.props.history.push(`/contact/${this.props.contact._id}`) :
            this.props.history.push('/contact');
    }

    inputChange = (ev) => {
        let field = ev.target.name;
        let value = ev.target.value;
        this.setState({ contact: { ...this.state.contact, [field]: value } })
    }

    render() {
        return (
            <div className="flex full column center align-center main-container">
                <div className='flex column align-center contact-form'>
                    <input type="text" placeholder="Please Enter Full Name" name="name"
                        onChange={this.inputChange} value={this.state.contact.name}></input>
                    <input type="text" placeholder="Please Enter Email Address" name="email"
                        onChange={this.inputChange} value={this.state.contact.email}></input>
                    <input type="text" placeholder="Please Enter Phone Number" name="phone"
                        onChange={this.inputChange} value={this.state.contact.phone}></input>
                    <div className="capitalize button pointer contact-btn" onClick={this.onSave}>save</div>
                    <div className="capitalize button pointer contact-btn" onClick={this.goBack}>Back</div>
                </div>
            </div>
        )
    }
}