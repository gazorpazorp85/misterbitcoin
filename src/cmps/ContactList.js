import React from 'react'

import ContactPreview from './ContactPreview.js'

export default function ContactList(props) {
    return <div>
        <ul>{props.contacts.map((contact)=><ContactPreview key={contact._id} contact={contact} />)}</ul>
        </div>
}