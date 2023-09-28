import UserContext from "./user-context";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: null,
    firstName: null,
    phoneNo: null,
    email: null,
  });

 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
