import React, { useState } from 'react';
import buttonStyle from './Button.module.css';

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.addSnowFlake}
        type="submit"
        className={buttonStyle.button}
      >
        Add User
      </button>
    </div>
  );
};

export default Button;
