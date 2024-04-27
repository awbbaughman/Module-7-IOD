import React, { useContext } from 'react';

import { EmojiContext } from '../Context/EmojiContext';

function Emoji() {

const { emoji, setEmoji } = useContext(EmojiContext);

function changeEmoji() {setEmoji(current => current === '🙂' ? '🙁' : '🙂');
}

return (

<div>

  <p>Current Emoji: {emoji}</p>

  <button onClick={changeEmoji}>Change Emoji</button>

</div>
);

}

export default Emoji;