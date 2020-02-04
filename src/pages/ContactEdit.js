import React, { useContext, useEffect, useState } from 'react';

import ContactForm from '../cmps/Contact/ContactForm';

import StoreContext from '../store';

function ContactEdit(props) {

    const ContactStore = useContext(StoreContext).ContactStore;
    const [contact, setContact] = useState(null);

    const loadContact = async () => {
        const id = props.match.params.id;
        try {
            const contact = await ContactStore.getContactById(id);
            setContact(contact);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadContact();
    }, [props.match.params.id]);

    const editContact = async (editedContact) => {
        try {
            await ContactStore.editContact(editedContact);
            props.history.push(`/contact/${editedContact._id}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        contact && <ContactForm {...props} contact={contact} onSave={editContact} />
    )
}

export default ContactEdit;