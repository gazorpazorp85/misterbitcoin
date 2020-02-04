import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="flex center align-center nav-bar">
            <div className=" flex space-between center-container">
                <div>
                    <NavLink activeClassName="active" className="capitalize" to='/' exact>
                        homepage
                </NavLink>
                </div>
                <div>
                    <NavLink activeClassName="active" className="capitalize" to='/contacts' exact>
                        contacts
                </NavLink>
                </div>
            </div>
        </nav>
    )
}