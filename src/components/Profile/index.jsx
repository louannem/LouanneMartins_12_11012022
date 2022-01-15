import React from "react"
import "../../utils/styles/Profile.css"
import BarChartTest from "../BarChart"
import LineChartTest from "../LineChart"
import UserRadarChart from "../RadarChart"
import SimplePieChart from "../PieChart"
import Sidebar from "../Sidebar"
import CaloriesIcon from "../../assets/stats/calories-icon.svg"
import ProteinIcon from "../../assets/stats/protein-icon.svg"
import CarbsIcon from "../../assets/stats/carbs-icon.svg"
import FatIcon from "../../assets/stats/fat-icon.svg"

class Profile extends React.Component {
    render() {
        return(
            <div className="profile-wrapper">

                <div className="profile-title">
                    <h1>Bonjour <span>Thomas</span></h1>
                    <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </div>

                <div className="profile-content">
                    <div className="graph-wrapper">
                        <div className="barchart-wrapper">
                        <BarChartTest/>
                        </div>
                        
                        <div className="other-graphs">
                            <div className="linechart-wrapper">
                                <LineChartTest/>
                            </div>

                            <div className="radarchart-wrapper">
                                <UserRadarChart/>
                            </div>

                            <div className="piechart-wrapper">
                                <SimplePieChart/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="stats-wrapper">
                        <Sidebar img={CaloriesIcon} value="1,930kCal" type="Calories" />
                        <Sidebar img={ProteinIcon} value="155g" type="Proteines" />
                        <Sidebar img={CarbsIcon} value="290g" type="Glucides" />
                        <Sidebar img={FatIcon} value="50g" type="Lipides" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile