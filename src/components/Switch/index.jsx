import React, { useContext } from "react";
import { UserContext } from "../../UserContext"


export const Switch = () => {
    const user = useContext(UserContext)
    function switchUser(user) {
        if(user.userId === "12") {
            user.setId("18")
        } else if (user.userId === "18") { user.setId("12")}
    }

    return(
        <button onClick={() => switchUser(user)}>Changer user</button>
    )
}