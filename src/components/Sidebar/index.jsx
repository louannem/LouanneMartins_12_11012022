import propTypes from "prop-types"
import React from "react"
import MeditationLogo from "../../assets/sidebar/icon1.svg"
import SwimmingLogo from "../../assets/sidebar/icon2.svg"
import BikingLogo from "../../assets/sidebar/icon3.svg"
import WeightIcon from "../../assets/sidebar/icon4.svg"
import "../../utils/styles/Footer.css"

class Sidebar extends React.Component {
    render() {
        return(
            <footer>
                <div className="icons-wrapper">
                    <div className="footer-icon">
                        <img src={MeditationLogo} alt="" />
                    </div>

                    <div className="footer-icon">
                        <img src={SwimmingLogo} alt="" />
                    </div>

                    <div className="footer-icon">
                        <img src={BikingLogo} alt="" />
                    </div>

                    <div className="footer-icon">
                        <img src={WeightIcon} alt="" />
                    </div>
                </div>
                <span>{this.props.credits}</span>
            </footer>
        )
    }
}

Sidebar.propTypes = {
    credits: propTypes.string.isRequired
}

export default Sidebar