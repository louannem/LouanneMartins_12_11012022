import { useContext } from "react"
import { UserContext } from "../utils/UserContext"

import { Link } from "react-router-dom"

export default function Homepage() {
    const context = useContext(UserContext)
    
        /**
         * Functions to call context's hook
         */
        const handleSwitchToMock = () => { context.switchToMock()}
        const handleSwitchToAPI12 = ()=> { context.switchToAPI12()}
        const handleSwitchToAPI18 = ()=> { context.switchToAPI18()}

        return(
            <div className="user-selection">
                <h1>SportSee</h1>
                <h2>Choisissez un utilisateur</h2>
                <Link to='/dashboard'>
                    <button onClick={handleSwitchToAPI12}>Utiliser le profil de Karl</button>
                </Link>

                <Link to='/dashboard'>
                    <button onClick={handleSwitchToAPI18}>Utiliser le profil de Cecilia</button>
                </Link>
                <Link to='/dashboard'>
                    <button onClick={handleSwitchToMock}>Utiliser les données mockées</button>
                </Link>
            </div>
        )
    
}