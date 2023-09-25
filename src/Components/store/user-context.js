import React from "react";

const UserContext = React.createContext({
  user: {
    userName: null,
    firstName: null,
    phoneNo: null,
    email: null,
  },
  setUser: () => {}, // Placeholder function
});

export default UserContext;
