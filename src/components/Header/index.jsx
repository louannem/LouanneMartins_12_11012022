import propTypes from "prop-types"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"

export default function Header() {
    return(
        <header>
            <div className="logo-wrapper">
                <Link to="/">
                    <img src={Logo} alt="Logo SportSee" />
                </Link>
            </div>

            <nav>
                <a href="/">Accueil</a>
                <a href="/">Profil</a>
                <a href="/">Réglage</a>
                <a href="/">Communauté</a>
            </nav>
        </header>
    )
}

Header.propTypes = {
    logo: propTypes.string.isRequired
}