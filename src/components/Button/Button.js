import React, { useState } from 'react';
import buttonStyle from './Button.module.css';

const Button = (props) => {
  const addUserHandler = () => {
    const verifyNameInput = props.verifyNameInput();
    const verifyAgeInput = props.verifyAgeInput();

    if (verifyNameInput && verifyAgeInput) {
      props.newUser(props.name, props.age);
    }
  };

  return (
    <div>
      <button
        onClick={addUserHandler}
        type="submit"
        className={buttonStyle.button}
      >
        Add User
      </button>
    </div>
  );
};

export default Button;
