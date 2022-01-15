import React from "react"
import "../../utils/styles/Profile.css"
import BarChartTest from "../BarChart"
import LineChartTest from "../LineChart"
import UserRadarChart from "../RadarChart"
import SimplePieChart from "../PieChart"

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
                    <div className="stats-wrapper"></div>
                </div>
            </div>
        )
    }
}

export default Profile