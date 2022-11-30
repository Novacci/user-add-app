import React, { useState } from 'react';
import buttonStyle from './Button.module.css';

const Button = (props) => {
  const addUserHandler = () => {
    props.newUser(props.name, props.age);
    props.verifyAgeInput();
    props.verifyNameInput();
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
