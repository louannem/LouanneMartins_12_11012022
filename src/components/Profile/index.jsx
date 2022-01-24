import React from "react"
import { UserContext } from "../../UserContext"
import { fetchData } from "../../utils/service/Service.js"

import { Switch } from "../Switch"
import BarChartTest from "../Charts/BarChart"
import SimpleLineChart from "../Charts/LineChart"
import SimpleRadarChart from "../Charts/RadarChart"
import SimpleRadialChart from "../Charts/RadialChart"
import Card from "../Sidebar"

import "../../utils/styles/Profile.css"
import CaloriesIcon from "../../assets/stats/calories-icon.svg"
import ProteinIcon from "../../assets/stats/protein-icon.svg"
import CarbsIcon from "../../assets/stats/carbs-icon.svg"
import FatIcon from "../../assets/stats/fat-icon.svg"
import propTypes from "prop-types"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 18,
            name: '',
            calories:'',
            proteines:'',
            carbo:'',
            lipides:''
        }
      }  
      
      async update(data) {
          if(this.context.userId !== this.state.id) {
            this.setState({id:this.context.userId});            
            data = await fetchData(this.context.userId,'')

            this.setState({
                name: data.userInfos.firstName,
                calories: data.keyData.calorieCount,
                proteines:data.keyData.proteinCount,
                carbo: data.keyData.carbohydrateCount,
                lipides: data.keyData.lipidCount
            })
          }
      }

    async componentDidMount(){ 
        const user = await fetchData(this.state.id,'')
     
        this.setState({
            name: user.userInfos.firstName,
            calories:user.keyData.calorieCount,
            proteines:user.keyData.proteinCount,
            carbo:user.keyData.carbohydrateCount,
            lipides:user.keyData.lipidCount,
        } )
    }

    componentDidUpdate(){
        this.update()  
    }
    
        
    render() {
        return(
            <div className="profile-wrapper">
                <div className="profile-title">
                    <h1>Bonjour <span>{this.state.name}</span></h1>
                    <h2>{this.props.secondTitle}</h2>
                </div>

                <Switch buttonText="Passer à un autre utilisateur" />

                <div className="profile-content">
                    <div className="graph-wrapper">
                        <div className="barchart-wrapper">
                        <BarChartTest/>
                        </div>
                        
                        <div className="other-graphs">
                            <div className="linechart-wrapper">
                                <SimpleLineChart/>
                            </div>

                            <div className="radarchart-wrapper">
                                <SimpleRadarChart/>
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

Profile.contextType = UserContext
Profile.protoTypes = {
    secondTitle: propTypes.string.isRequired
}
export default Profile