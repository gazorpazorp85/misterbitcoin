import React, { useContext, useEffect, useState } from 'react';

import StoreContext from '../../store';

import ContactService from '../../service/ContactService';

function ContactForm(props) {

    const ContactStore = useContext(StoreContext).ContactStore;
    const [contact, setContact] = useState(ContactService.getEmptyContact);

    const loadContact = async () => {
        const id = props.match.params.id;
        try {
            await ContactStore.getContactById(id);
            const contact = ContactStore.currContact;
            setContact(contact);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadContact();
    }, [props.match.params.id]);

    const onSave = (ev) => {
        ev.preventDefault();
        props.onSave(contact);
    }

    const goBack = () => {
        (contact) ?
            props.history.push(`/contact/${contact._id}`) :
            props.history.push('/contact');
    }

    const inputChange = (ev) => {
        let { name, value } = ev.target;
        setContact({ ...contact, [name]: value });
    }
        return (
            <div className="flex full column center align-center main-container">
                <div className='flex column align-center contact-form'>
                    <input type="text" placeholder="Please Enter Full Name" name="name"
                        onChange={inputChange} value={contact.name} />
                    <input type="text" placeholder="Please Enter Email Address" name="email"
                        onChange={inputChange} value={contact.email} />
                    <input type="text" placeholder="Please Enter Phone Number" name="phone"
                        onChange={inputChange} value={contact.phone} />
                    <div className="capitalize button pointer contact-btn" onClick={onSave}>save</div>
                    <div className="capitalize button pointer contact-btn" onClick={goBack}>back</div>
                </div>
            </div>
        )
}

export default ContactForm;