import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoggedOut = () => {
  const { login } = useContext(UserContext);

  const onClickLogin = async () => {
    const response = await fetch('/api/profile');
    if (response.ok) {
      const user = await response.json();
      login(user);
    } else {
      console.error('Failed to log in');
    }
  };

  return (
    <button onClick={onClickLogin}>Login</button>
  );
};

export default LoggedOut;