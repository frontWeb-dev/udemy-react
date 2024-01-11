import React from 'react';

const TabButton = ({ children }) => {
  const clickHandler = () => {};

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
};

export default TabButton;
