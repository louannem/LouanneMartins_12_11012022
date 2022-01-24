import React, { useContext } from "react";
import { UserContext } from "../../UserContext"


export const Switch = () => {
    const data = useContext(UserContext)

    const handleChange = () => {
        data.switchUser()
    }

    return(
        <button onClick={handleChange}>Changer user</button>
    )
}