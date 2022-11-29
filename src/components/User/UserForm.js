import React, { useState } from 'react';
import formStyle from './UserForm.module.css';
import Button from '../Button/Button';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={formStyle.card}>
        <div className={formStyle.input}>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="text" />
          </div>

          <Button addSnowFlake={props.addSnowFlake} />
        </div>
      </div>
    </form>
  );
};
export default UserForm;
