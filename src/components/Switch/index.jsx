import { Link } from "react-router-dom";


/**
 * Switch button to change th user's id in current state
 * @returns Button
 */
export const Switch = () => {
    return(
        <Link to="/" className="switch-user">
            Changer d'utilisateur
        </Link>
        
    )
}
