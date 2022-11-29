import React, { useState } from 'react';
import formStyle from './UserForm.module.css';
import Button from '../Button/Button';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={formStyle.card}>
        <div className={formStyle.input}>
          <div>
            <label>Username</label>
            <input onChange={nameHandler} value={name} type="text" />
          </div>
          <div>
            <label>Age (Years)</label>
            <input onChange={ageHandler} value={age} type="text" />
          </div>

          <Button newUser={props.newUser} age={age} name={name} />
        </div>
      </div>
    </form>
  );
};
export default UserForm;
