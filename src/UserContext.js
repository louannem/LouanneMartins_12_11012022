import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setId] = useState("12");


  return (
    <UserContext.Provider
      value={{
        userId,
        setId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
