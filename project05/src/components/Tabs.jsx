import React from 'react';

const Tabs = ({ children, buttons, buttonsContainer }) => {
  const ButtonContainer = buttonsContainer;

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
