import React, { useState } from 'react';
import Button from './components/Button/Button';
import UserForm from './components/User/UserForm';
import UserList from './components/User/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 'us1',
      name: 'Borewicz',
      age: '25',
    },
    {
      id: 'us2',
      name: 'Wojtek',
      age: '25',
    },
  ]);

  const Snowflake = {
    id: Math.random(),
    name: 'SnowFlake',
    age: 25,
  };

  function addSnowFlake() {
    setUsers((users) => {
      return [...users, Snowflake];
    });
  }

  return (
    <div>
      <UserForm addSnowFlake={addSnowFlake} />
      <UserList users={users} />
    </div>
  );
}

export default App;
