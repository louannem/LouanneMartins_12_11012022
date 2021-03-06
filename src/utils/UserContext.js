import React, { createContext, useState } from "react"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setId] = useState(null)


  //By default, none are used and the user is asked to choose one
  const [mockUsed, setMock] = useState(false)
  const [APIUsed, setAPI] = useState(false)

  /**
   * Function to change mockUsed, APIUsed and userId values
   */
  const switchToAPI12 = () => { setAPI(true); setMock(false) ; setId(12)}
  const switchToAPI18 = () => { setAPI(true); setMock(false) ; setId(18)}
  const handleSwitchToMock12 = () => { setMock(true) ; setAPI(false); setId(12)}
  const handleSwitchToMock18 = () => { setMock(true) ; setAPI(false); setId(18)}


  const { Provider } = UserContext

  return (
    <Provider value={{userId,  handleSwitchToMock12, handleSwitchToMock18, switchToAPI12, switchToAPI18, mockUsed, APIUsed}}>
      {children}
    </Provider>
  );
};
