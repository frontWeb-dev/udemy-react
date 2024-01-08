import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../ErrorModal/ErrorModal';
import Card from '../UI/Card';

const initialInfo = { name: '', age: '' };

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState(initialInfo);
  const [alert, setAlert] = useState('');
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const changeHandler = (input, value) => {
    setUserInfo((prev) => {
      return { ...prev, [input]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userInfo.age.trim().length === 0 || userInfo.name.trim().length === 0) {
      setAlert('Please enter a valid name and age (non-empty values).');
      setModal(true);
      return;
    }

    if (userInfo.age < 0) {
      setAlert('Please enter a valid age (> 0)');
      setModal(true);
      return;
    }

    props.addUsers(userInfo);
    setUserInfo(initialInfo);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={userInfo.name}
          onChange={(e) => changeHandler('name', e.target.value)}
        />

        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={userInfo.age}
          onChange={(e) => changeHandler('age', e.target.value)}
        />

        <Button type='submit'>Add User</Button>
      </form>

      {modal && <ErrorModal alert={alert} offModal={modalHandler} />}
    </Card>
  );
};

export default AddUser;
