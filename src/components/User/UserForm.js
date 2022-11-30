import React, { useState } from 'react';
import formStyle from './UserForm.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showModal, setShowModal] = useState(false);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setName('');
    setAge('');
  };

  const modalStop = () => {
    setShowModal(false);
  };

  function checkModal() {
    if (age === 0 || age < 0) {
      setShowModal(true);
    }
  }

  // jesli age = 0 albo age < 0 to pojawia sie modal
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
            <input onChange={ageHandler} value={age} type="number" />
          </div>

          <Button
            newUser={props.newUser}
            age={age}
            name={name}
            checkModal={checkModal}
          />
          {showModal ? <Modal modalStop={modalStop} /> : null}
        </div>
      </div>
    </form>
  );
};
export default UserForm;
