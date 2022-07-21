import React, { useContext } from "react";
import { UserContextData } from "./UserContext";

const UserConsumer = () => {
  const { userData } = useContext(UserContextData);

  if (!userData?.isLoggedIn) return null;

  return <div>Welcome {userData?.userName}</div>;
};

export default UserConsumer;
