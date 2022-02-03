import { useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "../utils/UserContext"
import Logo from "../assets/logo.svg"



export default function Homepage() {
    const context = useContext(UserContext)
    
        /**
         * Functions to get context's data
         */
        const handleSwitchToMock12 = () => { context.handleSwitchToMock12()}
        const handleSwitchToMock18 = () => { context.handleSwitchToMock18()}
        const handleSwitchToAPI12 = ()=> { context.switchToAPI12()}
        const handleSwitchToAPI18 = ()=> { context.switchToAPI18()}

        return(
            <div className="user-selection">
                <img src={Logo} alt="SportSee logo" />
                <h2>Choisissez un utilisateur</h2>
                <Link to='/dashboard'>
                    <button onClick={handleSwitchToAPI12}>Utiliser le profil de Karl Dovineau</button>
                </Link>

                <Link to='/dashboard'>
                    <button onClick={handleSwitchToAPI18}>Utiliser le profil de Cecilia Ratorez</button>
                </Link>
                <Link to='/dashboard'>
                    <button onClick={handleSwitchToMock12}>Utiliser les données mockées de Karl Dovineau</button>
                </Link>
                <Link to='/dashboard'>
                    <button onClick={handleSwitchToMock18}>Utiliser les données mockées de Cecilia Ratorez</button>
                </Link>
            </div>
        )
    
}