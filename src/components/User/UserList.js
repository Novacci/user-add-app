import React, { useState } from 'react';
import listStyle from './UserList.module.css';
import formStyle from './UserForm.module.css';

const UserList = (props) => {
  return (
    <div className={listStyle.users}>
      <ul className={formStyle.list}>
        {props.users.map((user) => (
          <li key={user.id}>{user.name + ' ' + user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
