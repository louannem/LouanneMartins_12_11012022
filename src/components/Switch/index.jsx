import React, { useContext } from "react";
import propTypes from "prop-types";
import { UserContext } from "../../utils/UserContext"


/**
 * Switch button to change th user's id in current state
 * @returns Button
 */
export const Switch = ({buttonText}) => {
    const data = useContext(UserContext)

    const handleChange = () => {
        data.switchUser()
    }

    return(
        <button onClick={handleChange} className="switch-user">{buttonText}</button>
    )
}

Switch.propTypes = {
    buttonText: propTypes.string.isRequired
}