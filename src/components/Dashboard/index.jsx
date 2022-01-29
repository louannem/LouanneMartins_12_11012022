import { useEffect, useState, useContext } from "react"
import User from "../../utils/data/user/UserDetails"
import UserActivity from "../../utils/data/user/UserActivity"
import UserSessions from "../../utils/data/user/UserSessions"
import UserPerformance from "../../utils/data/user/UserPerformance"

//Delete comment to use mocked data
//import { mockedUserData, mockedUserPerformance, mockedUserSessions, mockedUserActivity } from "../../utils/data/mockedData.js"

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
import Error from "../../pages/Error"
import Loading from "../../pages/Loading"

function Dashboard({secondTitle}){
    const [userData, setUserData] = useState({})
    const [userActivity, setUserActivity] = useState({})
    const [userSessions, setUserSessions] = useState({})
    const [userPerformance, setUserPerformance] = useState({})

    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false) 

    const context = useContext(UserContext)
    

    useEffect(() => {

        /* Delete comment to use mocked data
        const newUser = new User(mockedUserData) ; setUserData(newUser)
        const newActivity = new UserActivity(mockedUserAactivity) ; setUserActivity(newActivity)
        const newSessions = new UserSessions(mockedUserSessions) ; setUserSessions(newSessions)
        const newPerformance = new UserPerformance(mockedUserPerformance) ; setUserPerformance(newPerformance)
        */


        /**
         * Fetches data & creates a new user based on class constructor
         */
        fetchUser(context.userId,'').then((user) => { const newUser = new User(user.data) ; setUserData(newUser) ; setIsLoading(false)})
        .catch(() => { setHasError(true) })

        fetchUser(context.userId,'/activity').then((user) => { const newActivity = new UserActivity(user.data) ; setUserActivity(newActivity) })
        .catch(() => { setHasError(true)})

        fetchUser(context.userId,'/average-sessions').then((user) => { const newSessions = new UserSessions(user.data) ; setUserSessions(newSessions) })
        .catch(() => { setHasError(true)})

        fetchUser(context.userId,'/performance').then((user) => { const newPerformance = new UserPerformance(user.data) ; setUserPerformance(newPerformance) })
        .catch(() => { setHasError(true)})
    },[context.userId, isLoading, hasError])  

    
    return(
        hasError ?  
        <Error />
        
        :
        
        isLoading ? 
        <Loading />
        
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
                        <BarChart data={userActivity} />
                    </div>

                    <div className="other-graphs">
                        
                        <div className="linechart-wrapper">
                            <SimpleLineChart data={userSessions} />
                        </div>

                        <div className="radarchart-wrapper">
                            <SimpleRadarChart data={userPerformance}  />
                        </div>

                        <div className="piechart-wrapper">
                            <SimpleRadialChart data={userData}/>
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