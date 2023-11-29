import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoggedIn = () => {
  const { userProfile, logout } = useContext(UserContext);
  return (
    <div>
      <span>Welcome, {userProfile.username}!</span>
      <button onClick={logout}>  Logout</button>
    </div>
  );
};

export default LoggedIn;