import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import StoreContext from '../store';

export default function ContactDetails(props) {

    const ContactStore = useContext(StoreContext).ContactStore;
    const [id, setId] = useState('');
    const [contact, setContact] = useState('');

    const load = async () => {
        const id = props.match.params.id;
        try {
            await ContactStore.getContactById(id);
            const contact = ContactStore.currContact;
            setId(id);
            setContact(contact);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        load();
    }, [props.match.params.id])

    const onDelete = async () => {
        await ContactStore.deleteContact(id);
        props.history.push('/contact');
    }

    const onBack = () => {
        props.history.push('/contact');
    }

    return useObserver(() => {
        return (
            <div className="flex column full main-container">
                <div className="flex center order-0">
                    <div className="flex column align-center img-container">
                        <img src={`https://robohash.org/${contact._id}.png`} alt={`${contact.name}`} />
                    </div>
                    <div>
                        <div className="flex column center align-center img-details-container">
                            <h2>name: {contact.name}</h2>
                            <h4>email: {contact.email}</h4>
                            <h4>phone: {contact.phone}</h4>
                        </div>
                    </div>
                </div>
                <div className="flex center order-1 contact-buttons-container main-container">
                    <div className="capitalize button pointer contact-btn" onClick={onBack}>back to list</div>
                    <div className="button pointer contact-btn">
                        <Link className="capitalize" to={`/contact/edit/${contact._id}`}>edit details</Link>
                    </div>
                    <div className="capitalize button pointer contact-btn" onClick={onDelete}>delete contact</div>
                </div>
            </div>
        )
    })
}