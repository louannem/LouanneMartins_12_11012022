import propTypes from 'prop-types'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LineTooltip, addLineDays } from '../../../utils/chartsCustomizing'

import "../../../utils/styles/Dashboard.css"


export default function SimpleLineChart({data}) {

    return(
        <ResponsiveContainer className="lineChart-custom" width="100%" height="100%" fill="red">
                <LineChart  width="100%" height="100%" data={data.sessions} margin={{ top: 30, right: 10, left: 10, bottom: 0, }} >
                  <CartesianGrid strokeDasharray="3 3"  />
                  <defs>
                      <linearGradient id="linear" x1="0" y1="0.5" x2="1" y2="1">
                          <stop offset="50%" stopColor="#ffff" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#ffff" stopOpacity={1}/>
                      </linearGradient>
                  </defs>
                  <XAxis dataKey="day" tickFormatter={addLineDays} tickLine={false} tick={{ fill: 'white' }} fillOpacity="0.5" />
                  <Tooltip stroke="#ffff"  content={<LineTooltip />}  />
                  <Legend iconSize="0" layout="horizontal" verticalAlign="top" align="left" width="150px" />
                  <Line activeDot={{ fill: "#ffff",  r: 3 }}  type="monotone" dataKey="sessionLength" stroke="url(#linear)" dot={false} strokeWidth={2} name="Durée moyenne des sessions"/>
                </LineChart>
            </ResponsiveContainer>
    )
}

SimpleLineChart.propTypes = {
    data : propTypes.shape({
        id: propTypes.number,
        sessions: propTypes.array
    })
}