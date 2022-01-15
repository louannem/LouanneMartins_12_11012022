import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../utils/styles/BarChart.css"

const data = [
    {
      name: '1',
      poids: 40,
      calories: 240,
      amt: 2400,
    },
    {
      name: '2',
      poids: 30,
      calories: 139,
      amt: 2210,
    },
    {
      name: '3',
      poids: 71,
      calories: 356,
      amt: 2290,
    },
    {
      name: '4',
      poids: 27,
      calories: 308,
      amt: 2000,
    },
    {
      name: '5',
      poids: 55,
      calories: 200,
      amt: 2181,
    },
    {
      name: '6',
      poids: 29,
      calories: 310,
      amt: 2500,
    },
    {
      name: '7',
      poids: 39,
      calories: 300,
      amt: 2100,
    },
    {
        name: '8',
        poids: 49,
        calories: 300,
        amt: 2100,
      },
      {
        name: '9',
        poids: 67,
        calories: 310,
        amt: 2100,
      },
      {
        name: '10',
        poids: 69,
        calories: 300,
        amt: 2100,
      },
  ]

  function CustomTitle() {
    return (          
          <text x={110} y={40} dy={0} fill="#20253A" fontWeight={600} fontSize={15} textAnchor="middle">Activité quotidienne</text>
    )
  }


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
          <div className="custom-barchart-tooltip">
            <p className="poids">{`${payload[0].value}`}Kg</p>
            <p className='calories'>{`${payload[1].value}`}Kcal</p>
          </div>
        )
    }
    return null
  }



class BarChartTest extends React.Component {
    render() {
        return(
            <ResponsiveContainer width="100%" height="100%">
                <BarChart  width={500} height={300} data={data} margin={{ top: 45, right: 30, left: 40, bottom: 5, }} >
                <CartesianGrid strokeDasharray="2" />
                <XAxis dataKey="name" tickLine={false}  />
                <YAxis orientation="right" tickLine={false}  />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C4", fillOpacity: 0.5 }}/>
                <Legend iconType="circle" layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ marginTop: "-20px", color: "#74798C"}} />
                <Bar name="Poids (kg)" label={<CustomTitle/>}  dataKey="poids" fill="#020203" barSize={7} radius={[3, 3, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#ff0101" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

export default BarChartTest