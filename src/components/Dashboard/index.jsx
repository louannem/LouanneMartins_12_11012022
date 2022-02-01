import { useContext } from "react"
import propTypes from "prop-types"

//Mock data to activate on the homepage
import { mockedUserData, mockedUserPerformance, mockedUserSessions, mockedUserActivity } from "../../utils/data/mockedData.js"

import { UserContext } from "../../utils/UserContext"
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

import Service from "../../utils/data/Fetch"
import User from "../../utils/data/user/UserDetails"
import UserActivity from "../../utils/data/user/UserActivity"
import UserPerformance from "../../utils/data/user/UserPerformance"
import UserSessions from "../../utils/data/user/UserSessions"

export default function Dashboard({secondTitle, userDetails, activity, performance, averageSessions}){
    const context = useContext(UserContext)

    if(context.APIUsed) {
        userDetails = Service(context.userId,'')
        activity = Service(context.userId, '/activity')
        performance = Service(context.userId, '/performance')
        averageSessions = Service(context.userId,'/average-sessions')
    } else if (context.mockUsed) {
        userDetails = { userData: new User(mockedUserData)}
        activity = { userData: new UserActivity(mockedUserActivity)}
        performance = { userData: new UserPerformance(mockedUserPerformance.data)}        
        averageSessions = { userData: new UserSessions(mockedUserSessions)}

    }
    
    if(userDetails.hasError || performance.hasError || activity.hasError || averageSessions.hasError ) { 
        return <Error/>
    } else if (userDetails.isLoading || performance.isLoading || activity.isLoading || averageSessions.isLoading) {
        return <Loading />
    } else {
       
        const userData = userDetails.userData
        const userPerformance = performance.userData
        const userActivity = activity.userData
        const userSessions = averageSessions.userData
        
        return(
           
            <div className="profile-wrapper">
                <div className="profile-title">
                    <h1>Bonjour <span>{userData.firstName}</span></h1>
                    <h2>{secondTitle}</h2>
                </div>


                <Switch activeUser={context.APIUsed ? `API` :  `mock` } />
                
                
                <div className="profile-content">
                    <div className="graph-wrapper">
                        <div className="barchart-wrapper">
                            <BarChart data={userActivity} />
                            
                        </div>

                        <div className="other-graphs">
                            
                            <div className="linechart-wrapper">
                            <div className="linechart-title">Durée moyenne des sessions</div>
                                <SimpleLineChart data={userSessions} />
                            </div>

                            <div className="radarchart-wrapper">
                                <SimpleRadarChart data={userPerformance.performance}  />
                            </div>

                            <div className="piechart-wrapper">
                            <span>Score</span>
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
}

 Dashboard.propTypes = {
     secondTitle: propTypes.string,
     userDetails: propTypes.object,
     activity: propTypes.object,
     performance : propTypes.object,
     averageSessions: propTypes.object
 }