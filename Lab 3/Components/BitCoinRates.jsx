import React, { useContext } from 'react';

import { EmojiContext } from '../Context/EmojiContext';

function BitcoinRates() {

const { emoji } = useContext(EmojiContext);

return (

<div>

  <h3>Bitcoin Exchange Rate</h3>

  <p>Current Emoji: {emoji}</p>

  {/* Insert additional BitcoinRates logic here */}
   {/* What are we aiming to do here? I am confused by the goal of the Exercise (p. 44). 
   Bring in bitcoinrateslab2 code/data? 
   Or are we having fun with code here and making something
    seemingly financial/numeric like BitCoinRates actually show silly Emojis? */}

</div>
);

}

export default BitcoinRates;