import React from 'react';
import { Link } from 'react-router-dom';

export default class ContactPreview extends React.Component {

    render() {
        const { props } = this;
        return (
            <li>
                <Link to={`/contact/${props.contact._id}`}>
                    <img src={`https://robohash.org/${props.contact._id}.png`} />
                    <div>Full Name: {props.contact.name}</div>
                    <div>Email: {props.contact.email}</div>
                    <div>Phone: {props.contact.phone}</div>
                </Link>
            </li>)

    }
}