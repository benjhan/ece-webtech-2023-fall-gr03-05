import React, { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";
import users from '../pages/api/profile'; 

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setUserProfile({
        username,
        image: user.image,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
      });
      setIsConnected(true);
      router.push('/');
    } else {
      console.error('Login failed');
    }
  };

  const handleDisconnect = () => {
    setUserProfile(null);
    setIsConnected(false);
  };

  return (
    <UserContext.Provider value={{
      searchText,
      setSearchText,
      userProfile,
      isConnected,
      handleLogin,
      handleDisconnect,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;