import React, { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const clickHandler = () => {
    setIsEditing(!isEditing);
  };

  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  let player = <span className='player-name'>{playerName}</span>;
  let button = 'Edit';

  if (isEditing) {
    player = <input type='text' onChange={changeHandler} />;
    button = 'Change';
  }

  return (
    <li>
      <span className='player'>
        {player}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={clickHandler}>{button}</button>
    </li>
  );
};

export default Player;
