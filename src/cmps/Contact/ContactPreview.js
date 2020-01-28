import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPreview(props) {
    return (
        <div className="flex column center align-center card">
            <Link to={`/contact/${props.contact._id}`}>
                <div >
                    <img src={`https://robohash.org/${props.contact._id}.png`} height="100" />
                    <div>{props.contact.name}</div>
                </div>
            </Link>
        </div>)
}