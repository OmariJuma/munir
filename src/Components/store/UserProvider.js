import UserContext from "./user-context";
const UserProvider = ({ children }) => {
  const user = {
    userName: null,
    firstName: null,
    phoneNo: null,
    email: null,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserProvider;
