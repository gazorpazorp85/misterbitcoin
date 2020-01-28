import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import ContactList from '../cmps/ContactList';
import ContactFilter from '../cmps/ContactFilter.js';

import ContactService from '../service/ContactService';

export default class ContactPage extends Component {
    state = {
        contacts: [],
        filterBy: {
            term: '',
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = () => {
        ContactService.getContacts(this.state.filterBy)
            .then(contacts => this.setState({ contacts }))
            .catch((err) => this.props.history.push('/'));
    }

    onFilter = (filterBy) => {
        this.setState(prevState => ({filterBy: { ...prevState.filterBy, ...filterBy }}), this.loadContacts);
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ContactFilter onFilter={this.onFilter} filterBy={this.state.filterBy}/>
                <ContactList contacts={this.state.contacts} />
                
            </div >
        )
    }
}