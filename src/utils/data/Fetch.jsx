import { useEffect, useState, useContext } from "react"
import UserActivity from "./user/UserActivity"
import User from "./user/UserDetails"
import UserPerformance from "./user/UserPerformance"
import UserSessions from "./user/UserSessions"

import { UserContext } from "../UserContext"

/**
 * Service to fetch API's datas or use mocked data based on context 
 * @param {number} id user's id, used in state (18 by default can be switched)
 * @param {string} path the API path to get a specific set of datas needed by the charts 
 * @returns  isLoading boolean, hasError boolean & userData object
 */

export default function Service(id,path) {
    const context = useContext(UserContext) 
    const [userData, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false) 

    useEffect(() => {        
            async function fetchUser() {
                try {
                    const response = await fetch('http://localhost:3000/user/'+id+path)
                    const user = await response.json()
                    let userObj = {}                

                    path === '' ?  userObj = new User(user.data)
                    : path === '/activity' ?  userObj = new UserActivity(user.data)
                    : path === '/average-sessions' ? userObj = new UserSessions(user.data)
                    : userObj = new UserPerformance(user.data)
                    
                    setData(userObj)
                
                } catch (error) {
                    setHasError(true)
                    console.log(error)
                }
                finally { setIsLoading(false)}
            }
            fetchUser()
        
    }, [id,path, context.APIUsed, context.mockUsed])
    return { isLoading, userData, hasError }  
}

