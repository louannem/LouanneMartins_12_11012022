import React, { useContext } from "react";
import { UserContext } from "../../UserContext"


/**
 * Switch button to change th user's id in current state
 * @returns Button
 */
export const Switch = () => {
    const data = useContext(UserContext)

    const handleChange = () => {
        data.switchUser()
    }

    return(
        <button onClick={handleChange} className="switch-user">Passer à un autre utilisateur</button>
    )
}