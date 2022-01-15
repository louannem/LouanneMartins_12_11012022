import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../utils/styles/LineChart.css"

const data = [
    {
      name: 'L',
      minutes: 40,
    },
    {
        name: 'M',
        minutes: 25,
      },
      {
        name: 'M',
        minutes: 28,
      },
      {
        name: 'J',
        minutes: 55,
      },
      {
        name: 'V',
        minutes: 68,
      },
      {
        name: 'S',
        minutes: 30,
      },
      {
        name: 'D',
        minutes: 40,
      },
]

class LineChartTest extends React.Component {
    render(){
        return(
            <ResponsiveContainer width="100%" height="100%" fill="red">
                <LineChart width={50} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
                  <CartesianGrid strokeDasharray="3 3" fill="#FF0000"  />
                  <defs>
                      <linearGradient id="linear" x1="0" y1="0.5" x2="1" y2="1">
                          <stop offset="50%" stopColor="#ffff" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#ffff" stopOpacity={1}/>
                      </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tickLine={false} tick={{ fill: 'white' }} fillOpacity="0.5" />
                  <Tooltip stroke="#ffff" />
                  <Legend iconSize="0" layout="horizontal" verticalAlign="top" align="left" />
                  <Line activeDot={{ fill: "#ffff",  r: 3 }}  type="monotone" dataKey="minutes" stroke="url(#linear)" dot={false} strokeWidth={2} name="Durée moyenne des sessions"/>
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default LineChartTest