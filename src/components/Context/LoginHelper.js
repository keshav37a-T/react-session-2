import React, { useContext } from "react";
import { UserContextData } from "./UserContext";

const data = {
  userName: "Raviteja",
  userId: 1234,
  isLoggedIn: true,
};

const LoginHelper = () => {
  const { userData, handleUserState } = useContext(UserContextData);

  const handleLoginOrLogout = () => {
    if (userData?.isLoggedIn) {
      handleUserState(null);
    } else {
      handleUserState(data);
    }
  };

  return (
    <div>
      <button onClick={handleLoginOrLogout}>
        {userData?.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginHelper;
