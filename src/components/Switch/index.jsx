import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext"


export const Switch = () => {
    const data = useContext(UserContext)

    const [checkUser, Setuser] = useState(data.userId === "18")

    const handleChange = () => {
        data.switchUser()
    }

    return(
        <button onClick={handleChange}>Changer user</button>
    )
}