import propTypes from "prop-types"
import React from "react"
import MeditationLogo from "../../assets/sidebar/icon1.svg"
import SwimmingLogo from "../../assets/sidebar/icon2.svg"
import BikingLogo from "../../assets/sidebar/icon3.svg"
import WeightIcon from "../../assets/sidebar/icon4.svg"
import "../../utils/styles/Sidebar.css"

const imgArray = [
    MeditationLogo, 
    SwimmingLogo, 
    BikingLogo,
    WeightIcon
]

export default function Sidebar({credits}){
    return(
        <div className="sidebar">
            <div className="icons-wrapper">
                {imgArray.map((img) => 
                    <div className="sidebar-icon" key={img}>
                        <img src={img} alt="" key={img} />
                    </div>
                )}
            </div>
            
            <span>{credits}</span>
        </div>
    )
}

Sidebar.propTypes = {
    credits: propTypes.string.isRequired
}
