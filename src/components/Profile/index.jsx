import React from "react"
import { UserContext } from "../../UserContext"
import "../../utils/styles/Profile.css"
import { fetchUSerData, fetchData } from "../../utils/service/Service.js"
import BarChartTest from "../BarChart"
import LineChartTest from "../LineChart"
import UserRadarChart from "../RadarChart"
import SimpleRadialChart from "../RadialChart"
import Card from "../Sidebar"
import { Switch } from "../Switch"
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
        const user = await fetchUSerData()
     
        this.setState({
            id: 18,
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
                    <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </div>

                <Switch />

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

Profile.contextType = UserContext
export default Profile