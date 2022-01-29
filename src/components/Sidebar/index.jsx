import propTypes from "prop-types"
import React from "react"
import MeditationLogo from "../../assets/sidebar/icon1.svg"
import SwimmingLogo from "../../assets/sidebar/icon2.svg"
import BikingLogo from "../../assets/sidebar/icon3.svg"
import WeightIcon from "../../assets/sidebar/icon4.svg"
import "../../utils/styles/Sidebar.css"

export default function Sidebar({credits}){
    return(
        <div className="sidebar">
            <div className="icons-wrapper">
                <div className="sidebar-icon">
                    <img src={MeditationLogo} alt="" />
                </div>

                <div className="sidebar-icon">
                    <img src={SwimmingLogo} alt="" />
                </div>

                <div className="sidebar-icon">
                    <img src={BikingLogo} alt="" />
                </div>

                <div className="sidebar-icon">
                    <img src={WeightIcon} alt="" />
                </div>
            </div>
            <span>{credits}</span>
        </div>
    )
}

Sidebar.propTypes = {
    credits: propTypes.string.isRequired
}
