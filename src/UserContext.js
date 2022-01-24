import React, { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setId] = useState(18)

  const switchUser = () => {
    if(userId === 12) { setId(18);  } else if (userId === 18) {setId(12); }
  }
 
  const { Provider } = UserContext

  return (
    <Provider value={{userId, switchUser}}>
      {children}
    </Provider>
  );
};
