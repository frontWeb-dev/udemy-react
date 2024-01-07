import React from 'react';
import classes from './ErrorModal.module.css';
import Button from './../Button/Button';

const ErrorModal = (props) => {
  const clickHandler = () => {
    props.offModal();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={clickHandler}></div>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={classes.content}>
          <p>{props.alert}</p>
          <div className={classes.actions}>
            <Button onClick={clickHandler}>Okay</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
