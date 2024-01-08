import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <Card key={user.name} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
