import React, { Component } from 'react';

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
            .then(contact => this.setState({ contact }))
    }

    // goBack() {
    //     this.props.history.push('/contact')
    // }

    render() {
        if (!this.state.contact) return <div>Loading...</div>
        const { contact } = this.state;
        return <div>
            <div>
                <img src={`https://robohash.org/${contact._id}.png`} />
                <h2>name: {contact.name}</h2>
                <h4>email: {contact.email}</h4>
                <h4>phone: {contact.phone}</h4>
                {/* <div onClick={this.goBack}>back to list</div> */}
            </div>
        </div>
    }
}