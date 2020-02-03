import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react'; 

@observer
class ContactForm extends Component {

    @observable contact = this.props.contact;

    componentDidMount() {
        this.setFormDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.contact !== this.props.contact) this.setFormDataForEdit();
    }

    setFormDataForEdit() {
        const { contact } = this.props;
        this.contact = contact;
    }

    onSave = (ev) => {
        ev.preventDefault();
        this.props.onSave(this.contact);
    }

    goBack = () => {
        (this.contact) ?
            this.props.history.push(`/contact/${this.contact._id}`) :
            this.props.history.push('/contact');
    }

    inputChange = (ev) => {
        let { name, value } = ev.target;
        this.contact[name] = value;
    }

    render() {
        return (
            <div className="flex full column center align-center main-container">
                <div className='flex column align-center contact-form'>
                    <input type="text" placeholder="Please Enter Full Name" name="name"
                        onChange={this.inputChange} value={this.contact.name}></input>
                    <input type="text" placeholder="Please Enter Email Address" name="email"
                        onChange={this.inputChange} value={this.contact.email}></input>
                    <input type="text" placeholder="Please Enter Phone Number" name="phone"
                        onChange={this.inputChange} value={this.contact.phone}></input>
                    <div className="capitalize button pointer contact-btn" onClick={this.onSave}>save</div>
                    <div className="capitalize button pointer contact-btn" onClick={this.goBack}>back</div>
                </div>
            </div>
        )
    }
}

export default ContactForm;