import propTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { addBarAxis, BarTooltip, BarCustomTitle } from '../../../utils/chartsCustomizing';

import '../../../utils/styles/Charts.css'

export default function SimpleBarChart({data}) {
   
    let KgArray=[]
      data.activity.map((act) => {
        KgArray.push(act.kilogram)
        return KgArray
      })

    let calArray = []
    data.activity.map((act) => {
        calArray.push(act.calories)
        return calArray
    })

      const minKg = Math.min(...KgArray)
      const maxKg = Math.max(...KgArray)

      const minCal = Math.min(...calArray)
      const maxCal = Math.max(...calArray)


    return(
        <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.activity} margin={{ top: 45, right: 30, left: 40, bottom: 10, }} >
                <CartesianGrid strokeDasharray="2" />

                <XAxis  tickFormatter={addBarAxis}  tickLine={false} tick={{fontSize: "14px"}} dy={5} />
                <YAxis orientation='left' hide={true}   />
                <YAxis orientation='right' tickLine={true}  dataKey="kilogram"  />
                

                <Tooltip content={<BarTooltip />} cursor={{ fill: "#C4C4C4", fillOpacity: 0.5 }}/>
                <Legend iconType="circle" layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ marginTop: "-20px", marginRight:"20px", color: "#74798C"}} />
                
                <Bar name="Poids (kg)" label={<BarCustomTitle title="Activité quotidienne"/>}  dataKey="kilogram" fill="#020203" barSize={7} radius={[3, 3, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#ff0101" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
        </ResponsiveContainer>
    )
}


SimpleBarChart.propTypes = {
    data : propTypes.shape({
        id: propTypes.number,
        activity: propTypes.array
    })
}