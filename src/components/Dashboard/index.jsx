import { useEffect, useContext } from "react"

//Delete comment to use mocked data
//import { mockedUserData, mockedUserPerformance, mockedUserSessions, mockedUserActivity } from "../../utils/data/mockedData.js"

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

function Dashboard({secondTitle}){
    const context = useContext(UserContext)

    const userDetails = Service(context.userId,'')
    const activity = Service(context.userId, '/activity')
    const performance = Service(context.userId, '/performance')
    const averageSessions = Service(context.userId,'/average-sessions')

    useEffect(() => {
        
        /* Delete comment to use mocked data
        const newUser = new User(mockedUserData) ; setUserData(newUser)
        const newActivity = new UserActivity(mockedUserActivity) ; setUserActivity(newActivity)
        const newSessions = new UserSessions(mockedUserSessions) ; setUserSessions(newSessions)
        const newPerformance = new UserPerformance(mockedUserPerformance) ; setUserPerformance(newPerformance)
        */      
        
        
    },[])  


    
    if(userDetails.hasError || performance.hasError || activity.hasError || averageSessions.hasError ) { 
        return <Error/>
    } else if (userDetails.isLoading || performance.isLoading || activity.isLoading || averageSessions.isLoading) {
        return <Loading />
    } else {
        
        const userData = userDetails.userData
        const userPerformance = performance.userData
        const userActivity = activity.userData
        const userSessions = averageSessions.userData
        console.log(userData, userPerformance, userActivity)
        return(
           
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
}

export default Dashboard