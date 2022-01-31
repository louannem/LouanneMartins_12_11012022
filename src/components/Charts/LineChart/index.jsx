import propTypes from 'prop-types'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, YAxis } from 'recharts'
import { LineTooltip, addLineDays } from '../../../utils/chartsCustomizing'

import "../../../utils/styles/Dashboard.css"


export default function SimpleLineChart({data}) {
    /**
     * 
     * @param {*} props 
     * @returns 
     */
    const CustomCursor = (props) => {
        const { points, width, height } = props
        const { x, y } = points[0]
      
        return (
          <Rectangle
            fill="black"
            fillOpacity={0.1}
            x={x}
            y={y}
            width={width}
            height={height+100}
          />
        )
      }

      console.log(data.sessions)
      let lengthArray=[]
      data.sessions.map((session) => {
          lengthArray.push(session.sessionLength)
          console.log(lengthArray)
          return lengthArray
      })

      const minY = Math.min(...lengthArray)/2
      const maxY = Math.max(...lengthArray)+20
      console.log(minY, maxY)

    return(
        <ResponsiveContainer className="lineChart-custom" width="100%" height="100%" fill="red" >
                <LineChart  width="100%"  data={data.sessions} margin={{ top: 0, right: 5, left: 5, bottom: 0, }}  >
                  <CartesianGrid strokeDasharray="3 3"  />
                  <defs>
                      <linearGradient id="linear" x1="0" y1="0.5" x2="1" y2="1">
                          <stop offset="50%" stopColor="#ffff" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#ffff" stopOpacity={1}/>
                      </linearGradient>
                  </defs>
                  <XAxis className='linechart-Xaxis' dataKey="day" tickFormatter={addLineDays} tickLine={false} tick={{ fill: 'white' }} fillOpacity={0.5} />
                  <YAxis domain={[minY, maxY]} hide={true} />
                  <Tooltip stroke="#ffff"  content={<LineTooltip />} cursor={<CustomCursor />} />
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