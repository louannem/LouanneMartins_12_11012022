import { Link } from "react-router-dom"
import propTypes from "prop-types"


/**
 * Switch button to change th user's id in current state
 * @returns Button
 */
export const Switch = ({activeUser}) => {
    return(
        <div className="switch-block">
            <p>Utilisateur actif : {activeUser}</p>
            <Link to="/" className="switch-button">
                Changer d'utilisateur
            </Link>
        </div>
        
    )
}


Switch.propTypes = {
    activeUser: propTypes.string
}
