import axios from 'axios';

export default {
    getRate
    // getMarketPrice,
    // getConfirmedTransactions
}

async function getRate(coins) {
    debugger;
    try {
        const rate = await axios('https://blockchain.info/tobtc?currency=USD&value=1');
        return (coins * (1 / rate.data));
    } catch (err) {
        console.log(err);
    } 
}