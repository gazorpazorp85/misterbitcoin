import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import StoreContext from '../store';

import ContactList from '../cmps/Contact/ContactList';
import ContactFilter from '../cmps/Contact/ContactFilter';

function Contact(props) {

    const ContactStore = useContext(StoreContext).ContactStore;
    
    useEffect(() => {
        ContactStore.loadContacts();
    });

    return useObserver(() => {
        return (
            <div className="overflow full flex column">
                <div className="flex column justify-center main-container">
                    <h1 className="flex center capitalize">contacts</h1>
                    <div className="flex space-between align-center">
                        <div className="button pointer add-contact-btn">
                            <Link className="capitalize" to={`/contact/edit`}>add contact</Link>
                        </div>
                        <ContactFilter onFilter={ContactStore.setFilter} />
                    </div>
                    <ContactList contacts={ContactStore.contacts} />
                </div>
            </div>
        )
    })
}

export default Contact