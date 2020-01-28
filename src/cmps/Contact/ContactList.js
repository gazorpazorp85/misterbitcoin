import React from 'react'

import ContactPreview from './ContactPreview.js'

export default function ContactList(props) {
    return (
        <div className="cards-container">
            {props.contacts.map((contact) => <ContactPreview key={contact._id} contact={contact} />)}
        </div>
    )
}