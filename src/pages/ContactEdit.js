import React, { Component } from 'react';

import ContactForm from '../cmps/Contact/ContactForm';
import ContactService from '../service/ContactService';

export default class ContactEdit extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        (this.props.match.params.id) ? 
            this.loadContact() : 
            this.setState({contact: {name: '', email: '', phone: ''}});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    loadContact() {
        const { id } = this.props.match.params;
        if (!id) return;
        ContactService.getContactById(id)
            .then(contact => this.setState({ contact }));
    }

    editContact = (contact) => {
        ContactService.saveContact(contact)
            .then(contact => this.props.history.push(`/contact/${contact._id}`));
    }

    render () {
        return <ContactForm {...this.props} contact={this.state.contact} onSave={this.editContact} />
    }
}