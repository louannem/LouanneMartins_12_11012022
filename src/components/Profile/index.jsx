import React from "react"
import "../../utils/styles/Profile.css"
import { fetchUSerData } from "../../utils/service/Service.js"
import BarChartTest from "../../BarChart"
import LineChartTest from "../"
import UserRadarChart from "../RadarChart"
import SimpleRadialChart from "../RadialChart"
import Card from "../Sidebar"
import CaloriesIcon from "../../assets/stats/calories-icon.svg"
import ProteinIcon from "../../assets/stats/protein-icon.svg"
import CarbsIcon from "../../assets/stats/carbs-icon.svg"
import FatIcon from "../../assets/stats/fat-icon.svg"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories:'',
            proteines:'',
            carbo:'',
            lipides:'',
        }


      }      

    async componentDidMount(){ 
        const user = await fetchUSerData()
     
        this.setState({
            name: user.userInfos.firstName,
            calories:user.keyData.calorieCount,
            proteines:user.keyData.proteinCount,
            carbo:user.keyData.carbohydrateCount,
            lipides:user.keyData.lipidCount,
        } )
    }
    
        
    render() {
        console.log(this.state.proteines)
        return(
            <div className="profile-wrapper">

                <div className="profile-title">
                    <h1>Bonjour <span>{this.state.name}</span></h1>
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
                                <SimpleRadialChart/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="stats-wrapper">
                        <Card img={CaloriesIcon} value={`${this.state.calories}kCal`} type="Calories" />
                        <Card img={ProteinIcon} value={`${this.state.proteines}g`} type="Proteines" />
                        <Card img={CarbsIcon} value={`${this.state.carbo}g`} type="Glucides" />
                        <Card img={FatIcon} value={`${this.state.lipides}g`} type="Lipides" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile