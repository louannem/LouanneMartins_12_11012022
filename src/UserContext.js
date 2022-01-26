import React, { createContext, useState } from "react"
import { useEffect } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setId] = useState(18)

  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const switchUser = () => {
    if(userId === 12) { setId(18);  } else if (userId === 18) {setId(12); }
  }


  useEffect(() => {
    setLoading(true)

    const fetchDatas = async () => {
        setLoading(true)
        
        try {
            const response = await fetch(`http://localhost:3000/user/` + userId)
            const user = await response.json()
            setData(user.data)
        } catch (error) {
            setError(true)
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    fetchDatas()
}, [userId])
 
  const { Provider } = UserContext

  return (
    <Provider value={{userId, switchUser, data, isLoading, error}}>
      {children}
    </Provider>
  );
};
