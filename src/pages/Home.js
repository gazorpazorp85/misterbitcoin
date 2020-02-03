import React, { Component } from 'react';

// import UserService from '../service/UserService';
// import BitcoinService from '../service/BitcoinService';

export default class Home extends Component {

    render() {
        // const user = UserService.getUser();
        // const rate = BitcoinService.getRate(user.coins);
        return (
            <div className="flex full center align-center">
                <h1 className="capitalize main-title">misterbit bitcoin</h1>
                {/* <h2>{user.name}</h2>
                <h2>{rate}</h2> */}
            </div>
        )
    }
}