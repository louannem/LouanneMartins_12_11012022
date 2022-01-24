import React from "react"
import propTypes from "prop-types"

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="logo-wrapper">
                    <img src={this.props.logo} alt="Logo SportSee" />
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
}
Header.propTypes = {
    logo: propTypes.string.isRequired
}

export default Header