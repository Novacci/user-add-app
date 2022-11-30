import React, { useState } from 'react';
import formStyle from './UserForm.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  const ageContent =
    'Unfortunetly you have typed wrong value in the Age input.';
  const nameContent = 'You need to type your name in order to add User';

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

  const modalStopAge = () => {
    setShowAgeModal(false);
  };
  const modalStopName = () => {
    setShowNameModal(false);
  };

  function verifyNameInput() {
    if (name.length === 0) {
      setShowNameModal(true);
    }
  }

  function verifyAgeInput() {
    if (age === 0 || age < 0) {
      setShowAgeModal(true);
    }
  }

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
            verifyAgeInput={verifyAgeInput}
            verifyNameInput={verifyNameInput}
          />

          {showAgeModal ? (
            <Modal content={ageContent} modalStop={modalStopAge} />
          ) : null}
          {showNameModal ? (
            <Modal content={nameContent} modalStop={modalStopName} />
          ) : null}
        </div>
      </div>
    </form>
  );
};
export default UserForm;
