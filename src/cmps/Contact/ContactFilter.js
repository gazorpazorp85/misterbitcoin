import React from 'react';

const ContactFilter = (props) => {

    const inputChange = (ev) => {
        let value = ev.target.value;
        props.onFilter({ term: value });
    }
    return (
        
        <div className="filter-container">
            <div className="filter-container flex center">
                <input type='text' placeholder='Search by Name, Phone or Email' value={props.term}
                    onChange={inputChange}></input>
            </div>
        </div>
    )
}

export default ContactFilter