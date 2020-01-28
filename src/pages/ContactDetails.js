import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactService from '../service/ContactService';

export default class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    loadContact() {
        const { id } = this.props.match.params;
        ContactService.getContactById(id)
            .then(contact => this.setState({ contact }));
    }

    goBack = () => {
        this.props.history.push('/contact');
    }

    onDelete = () => {
        ContactService.deleteContact(this.state.contact._id)
            .then(() => this.props.history.push('/contact'));
    }

    render() {
        if (!this.state.contact) return <div>Loading...</div>
        const { contact } = this.state;
        return (
            <div className="flex column full main-container">
                <div className="flex center order-0">
                    <div className="flex column align-center img-container">
                        <img src={`https://robohash.org/${contact._id}.png`} />
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
                    <div className="capitalize button pointer contact-btn" onClick={this.goBack}>back to list</div>
                    <div className="button pointer contact-btn">
                        <Link className="capitalize" to={`/contact/edit/${contact._id}`}>edit details</Link>
                    </div>
                    <div className="capitalize button pointer contact-btn" onClick={this.onDelete}>delete contact</div>
                </div>
            </div>
        )
    }
}