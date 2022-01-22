import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchActivityData } from '../../utils/service/Service';
import { BarTooltip, BarCustomTitle } from '../../utils/chartsCustomizing';
import "../../utils/styles/BarChart.css"

class BarChartTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sessions:[] }
  } 

  async componentDidMount(){ 
    const userActivity = await fetchActivityData()

    this.setState({
     sessions: userActivity.sessions
    })
  }

    render() {
        return(
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={this.state.sessions} margin={{ top: 45, right: 30, left: 40, bottom: 10, }} >
                <CartesianGrid strokeDasharray="2" />

                <XAxis dataKey="name" tickLine={false} tick={{fontSize: "14px"}} dy={5} />
                <YAxis orientation="right" tickLine={false} tick={{fontSize: "14px"}}  />

                <Tooltip content={<BarTooltip />} cursor={{ fill: "#C4C4C4", fillOpacity: 0.5 }}/>
                <Legend iconType="circle" layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ marginTop: "-20px", marginRight:"20px", color: "#74798C"}} />
                
                <Bar name="Poids (kg)" label={<BarCustomTitle title="Activité quotidienne"/>}  dataKey="kilogram" fill="#020203" barSize={7} radius={[3, 3, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#ff0101" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

export default BarChartTest