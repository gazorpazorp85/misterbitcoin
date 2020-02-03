import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import ContactForm from '../cmps/Contact/ContactForm';

@inject('ContactStore')
@observer class ContactEdit extends Component {

    @observable contact = null

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    loadContact = async () => {
        const { id } = this.props.match.params;
        await this.props.ContactStore.getContactById(id);
    }

    editContact = async (editedValue) => {
        await this.props.ContactStore.editContact(editedValue);
        this.props.history.push(`/contact/${this.props.ContactStore.currContact._id}`);
    }

    render() {
        let { currContact } = this.props.ContactStore;
        return <ContactForm {...this.props} contact={currContact} onSave={this.editContact} />
    }
}

export default ContactEdit;