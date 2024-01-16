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

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <input type='text' onChange={changeHandler} />
        ) : (
          <span className='player-name'>{playerName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? 'Change' : 'Edit'}</button>
    </li>
  );
};

export default Player;
