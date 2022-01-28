import React, { useEffect, useState, useContext } from "react"
import User from "../../../utils/data/user/UserDetails"
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { UserContext } from "../../../UserContext"
import { RadialCustomLabel } from "../../../utils/chartsCustomizing"
import { fetchUser } from "../../../utils/data/Service"


export default function SimpleRadialChart() {
    const [userScore, setUserScore] = useState([])
    const context = useContext(UserContext)

    useEffect(() => {
        /**
         * Fetches data & creates a new user based on class constructor
         */
        fetchUser(context.userId,'')
        .then((user) => {
            const newScore = new User(user.data)
            setUserScore(newScore)
        })
    },[context.userId]) 
  
    /**
     * Object to fill the chart
     */
    const scoreObj =[{
        score: userScore.score*100,
        fill : "#ff0000"
    }]

    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={scoreObj}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false}  />
                <RadialBar cornerRadius={10} minAngle={15} label={<RadialCustomLabel line1={userScore.score*100+"%"} line2="de votre objectif" />} clockWise dataKey="score" />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}
