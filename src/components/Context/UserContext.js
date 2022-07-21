import React, { createContext, useState } from "react";

export const UserContextData = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const handleUserState = (data) => {
    setUserData(data);
  };

  return (
    <UserContextData.Provider value={{ userData, handleUserState }}>
      {children}
    </UserContextData.Provider>
  );
};

export default UserContext;
