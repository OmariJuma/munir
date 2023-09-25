import UserContext from "./user-context";
import { useState, useEffect } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: null,
    firstName: null,
    phoneNo: null,
    email: null,
  });

  useEffect(() => {
    // This effect will run when the 'user' state is updated
    console.log("provider User state updated:", user);
  }, [user]); // Specify 'user' as a dependency

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
