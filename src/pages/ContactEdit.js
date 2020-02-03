import React, { useContext } from 'react';

import ContactForm from '../cmps/Contact/ContactForm';

import StoreContext from '../store';

function ContactEdit(props) {

    const ContactStore = useContext(StoreContext).ContactStore;

    const editContact = async (editedContact) => {
        try {
            await ContactStore.editContact(editedContact);
            props.history.push(`/contact/${editedContact._id}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ContactForm {...props} onSave={editContact} />
    )
}

export default ContactEdit;