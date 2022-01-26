import { useState, useContext, useEffect } from "react"
import { UserContext } from "../../../UserContext"
import { fetchUser } from "../../../utils/data/Service"
import UserActivity from "../../../utils/data/user/UserActivity"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { addBarAxis, BarTooltip, BarCustomTitle } from '../../../utils/chartsCustomizing';

import '../../../utils/styles/Charts.css'

export default function SimpleBarChart() {
    const [userActivity, setUserData] = useState({})
    const context = useContext(UserContext)

    useEffect(() => {
        //Fetches data & creates a new user
        fetchUser(context.userId,'/activity')
        .then((user) => {
            const newActivity = new UserActivity(user.data)
            setUserData(newActivity)
        })
    },[context.userId])  

    return(
        <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userActivity.activity} margin={{ top: 45, right: 30, left: 40, bottom: 10, }} >
                <CartesianGrid strokeDasharray="2" />

                <XAxis  tickFormatter={addBarAxis}  tickLine={false} tick={{fontSize: "14px"}} dy={5} />
                <YAxis orientation="right" tickLine={false} tick={{fontSize: "14px"}}  />

                <Tooltip content={<BarTooltip />} cursor={{ fill: "#C4C4C4", fillOpacity: 0.5 }}/>
                <Legend iconType="circle" layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ marginTop: "-20px", marginRight:"20px", color: "#74798C"}} />
                
                <Bar name="Poids (kg)" label={<BarCustomTitle title="Activité quotidienne"/>}  dataKey="kilogram" fill="#020203" barSize={7} radius={[3, 3, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#ff0101" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
        </ResponsiveContainer>
    )
}