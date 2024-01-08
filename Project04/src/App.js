import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUsers = (userInfo) => {
    setUsers([...users, userInfo]);
  };

  return (
    <div>
      <AddUser addUsers={addUsers} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
