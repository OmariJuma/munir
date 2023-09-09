import React from "react";
//create a context for user credentials

const UserContext = React.createContext({
  user: {
    userName: null,
    firstName: null,
    phoneNo: null,
    email: null,
  },
});

export default UserContext;
