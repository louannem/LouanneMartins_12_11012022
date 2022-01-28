import { useEffect, useState, useContext } from "react"
import User from "../../utils/data/user/UserDetails"
import {fetchUser} from "../../utils/data/Service"
import { UserContext } from "../../UserContext"

import "../../utils/styles/Dashboard.css"

//Assets 
import CaloriesIcon from "../../assets/stats/calories-icon.svg"
import ProteinIcon from "../../assets/stats/protein-icon.svg"
import CarbsIcon from "../../assets/stats/carbs-icon.svg"
import FatIcon from "../../assets/stats/fat-icon.svg"

//Components
import { Switch } from "../Switch"
import SimpleRadarChart from "../Charts/RadarChart"
import SimpleRadialChart from "../Charts/RadialChart"
import Card from "../Cards"
import BarChart from "../Charts/BarChart"
import SimpleLineChart from "../Charts/LineChart"

function Dashboard({secondTitle}){
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false) 

    const context = useContext(UserContext)

    useEffect(() => {
        /**
         * Fetches data & creates a new user based on class constructor
         */
        fetchUser(context.userId,'')
        .then((user) => {
            const newUser = new User(user.data)
            setUserData(newUser)
            setIsLoading(false)
        })
        .catch((error) => {
            setHasError(true)
        })

    },[context.userId, isLoading, hasError])  

    
    return(
        hasError ?  
        <div className="profile-wrapper">
            <p className="loading-text">Impossible de récupérer les données.</p> 
        </div>
        :
        isLoading ? 
        <div className="profile-wrapper">
            <p className="loading-text">Loading...</p> 
        </div>
        :
        <div className="profile-wrapper">
            <div className="profile-title">
                <h1>Bonjour <span>{userData.firstName}</span></h1>
                <h2>{secondTitle}</h2>
            </div>

            <Switch buttonText="Changer d'utilisateur" />

            <div className="profile-content">
                <div className="graph-wrapper">
                    <div className="barchart-wrapper">
                        <BarChart />
                    </div>

                    <div className="other-graphs">
                        
                        <div className="linechart-wrapper">
                            <SimpleLineChart />
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
                    <Card img={CaloriesIcon} value={`${userData.calories}kCal`} type="Calories" />
                    <Card img={ProteinIcon} value={`${userData.proteines}g`} type="Proteines" />
                    <Card img={CarbsIcon} value={`${userData.glucides}g`} type="Glucides" />
                    <Card img={FatIcon} value={`${userData.lipides}g`} type="Lipides" />
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard