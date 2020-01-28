import React, { Component } from 'react'

export default class ContactFilter extends Component {

    inputChange = (ev) => {
        let value = ev.target.value;
        this.props.onFilter({ term: value });
    }

    render() {
        return (
            <div className="filter-container">
                <div className="filter-container flex center">
                    <input type='text' placeholder='Search by Name, Phone or Email' value={this.props.filterBy.term}
                        onChange={this.inputChange} name='name'></input>
                </div>
                {/* <div>
                <input type='text' placeholder='Search by Email' value={this.props.filterBy.email}
                    onChange={this.inputChange} name='email'></input>
            </div>
            <div>
                <input type='text' placeholder='Search by Phone' value={this.props.filterBy.phone}
                    onChange={this.inputChange} name='phone'></input>
            </div> */}
            </div>
        )
    }
}