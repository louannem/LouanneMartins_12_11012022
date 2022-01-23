import React, { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setId] = useState(18);
  const [data, setData] = useState()

  const switchUser = () => {
    if(userId === 12) { setId(18);  } else if (userId === 18) {setId(12); }
  }
  
  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
    .then((response) => response.json()
    .then((user) => setData(user.data) ))

    fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => response.json()
    .then((user) => setData(user.data) ))

    fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => response.json()
    .then((user) => setData(user.data) ))

    fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => response.json()
    .then((user) => setData(user.data) ))
    
  }, [])

 

  const { Provider } = UserContext

  return (
    <Provider value={{data, userId, switchUser}}>
      {children}
    </Provider>
  );
};
