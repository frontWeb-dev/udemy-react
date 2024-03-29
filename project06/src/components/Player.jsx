import React, { useState } from 'react';

const Player = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const clickHandler = () => {
    setIsEditing((editing) => !editing);
  };

  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  let player = <span className='player-name'>{playerName}</span>;
  let button = 'Edit';

  if (isEditing) {
    player = <input type='text' onChange={changeHandler} required />;
    button = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {player}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={clickHandler}>{button}</button>
    </li>
  );
};

export default Player;
