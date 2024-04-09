// I copied some of this from the slides, some of this from the practice assistance, and added some myself.
// I still think there are errors throughout, but the basics are there.


import { useState, useEffect } from "react";

useEffect(() => {
const fetchRate = async () => {
    const response = await
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
    const data = await response.json();
        return setRate(data.bitcoin[currency.toLowerCase()])
};
fetchRate().then(data => {setRate(data.bitcoin[currency.toLowerCase()])});

return () => {
    ignore = true; // ignore now invalid fetch results
    console.log('cleanup effect');
    };
    }, 
    [currency]);

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinRate, setBitcoinRate] = useState('')
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                {currencies.map(curr => <option value={currency} key={currency}>{currency}</option>)}
                </select>
            </label>
            <strong>Exchange Rate:</strong> {rate ? `${rate} ${currency}` : 'Loading...'} 
            {/* ^^^^^ renders fetched exchange rate or loading indicator based on 
            whether or not rate has been set */}
        </div>
        )
    }