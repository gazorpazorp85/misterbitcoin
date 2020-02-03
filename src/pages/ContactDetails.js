import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('ContactStore')
@observer class ContactDetails extends Component {

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    loadContact = () => {
        const { id } = this.props.match.params;
        this.props.ContactStore.getContactById(id)
        
    }

    goBack = () => {
        this.props.history.push('/contact');
    }

    onDelete = async () => {
        const { _id } = this.props.ContactStore.currContact;
        await this.props.ContactStore.deleteContact(_id);
        this.props.history.push('/contact');
    }

    render() {
        const { _id, name, email, phone } = this.props.ContactStore.currContact;
        return (
            <div className="flex column full main-container">
                <div className="flex center order-0">
                    <div className="flex column align-center img-container">
                        <img src={`https://robohash.org/${_id}.png`} alt={`${name}`} />
                    </div>
                    <div>
                        <div className="flex column center align-center img-details-container">
                            <h2>name: {name}</h2>
                            <h4>email: {email}</h4>
                            <h4>phone: {phone}</h4>
                        </div>
                    </div>
                </div>
                <div className="flex center order-1 contact-buttons-container main-container">
                    <div className="capitalize button pointer contact-btn" onClick={this.goBack}>back to list</div>
                    <div className="button pointer contact-btn">
                        <Link className="capitalize" to={`/contact/edit/${_id}`}>edit details</Link>
                    </div>
                    <div className="capitalize button pointer contact-btn" onClick={this.onDelete}>delete contact</div>
                </div>
            </div>
        )
    }
}

export default ContactDetails;