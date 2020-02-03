import React from 'react';

import ContactPreview from './ContactPreview.js'

const ContactList = (props) => {

    return (
        <div className="cards-container">
            {props.contacts.map(contact => {
                return <ContactPreview contact={contact} key={contact._id} />
            })}
        </div>
    );
}

export default ContactList;