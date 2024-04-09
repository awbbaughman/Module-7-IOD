import React, { useState, useEffect } from 'react';


function useBitcoinExchangeRate(currency) {
  const [bitcoinRate, setBitcoinRate] = useState(null);

  useEffect(() => {
    const fetchBitcoinRate = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        setBitcoinRate(data?.bitcoin?.[currency]);
      } catch (error) {
        console.error('Error fetching Bitcoin rate:', error);
      }
    };

    fetchBitcoinRate(); 

    return () => {
      
    };
  }, [currency]);

  return bitcoinRate;
}

function BitcoinRates() {
  const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
  const [currency, setCurrency] = useState(currencies[0]);

  const bitcoinRate = useBitcoinExchangeRate(currency);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {bitcoinRate !== null && (
        <p>
          1 Bitcoin (BTC) = {bitcoinRate} {currency}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;