import React from 'react';

const Card = (props) => {
  return (
    <li>
      {props.name} <span>({props.age} years old)</span>
    </li>
  );
};

export default Card;
