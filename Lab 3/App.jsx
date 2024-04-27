import React from 'react';

import { EmojiProvider } from './Context/EmojiContext';

import BitcoinRates from './Components/BitCoinRates';

import Emoji from './Components/Emoji';

function App() {

return (

<EmojiProvider>

  <BitcoinRates />

  <Emoji />

</EmojiProvider>
);

}

export default App;