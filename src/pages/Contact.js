import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import ContactList from '../cmps/Contact/ContactList';
import ContactFilter from '../cmps/Contact/ContactFilter';

@inject('ContactStore')
@observer
class Contact extends Component {

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = () => {
        try {
            this.props.ContactStore.loadContacts();
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="overflow full flex column">
                <div className="flex column justify-center main-container">
                    <h1 className="flex center capitalize">contacts</h1>
                    <div className="flex space-between align-center">
                        <div className="button pointer add-contact-btn">
                            <Link className="capitalize" to={`/contact/edit`}>add contact</Link>
                        </div>
                        <ContactFilter onFilter={this.props.ContactStore.setFilter} />
                    </div>
                    <ContactList contacts={this.props.ContactStore.contacts} />
                </div>
            </div>
        )
    }
}

export default Contact