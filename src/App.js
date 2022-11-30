import React, { useState } from 'react';
import Button from './components/Button/Button';
import UserForm from './components/User/UserForm';
import UserList from './components/User/UserList';
import Modal from './components/Modal/Modal';

function App() {
  const [users, setUsers] = useState([]);
  // const [pop, setPop] = useState(false);

  function newUser(name, age) {
    const user = {
      id: Math.random(),
      name: name,
      age: age,
    };

    setUsers((users) => {
      return [...users, user];
    });
  }

  // const popHandler = () => setPop(true);
  // const popHandlerStop = () => setPop(false);

  return (
    <div>
      <UserForm newUser={newUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
