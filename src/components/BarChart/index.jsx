import React from 'react';
import { UserContext } from "../../UserContext"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchData } from '../../utils/service/Service';
import { BarTooltip, BarCustomTitle } from '../../utils/chartsCustomizing';
import "../../utils/styles/BarChart.css"

class BarChartTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: 18,
      sessions:[] 
    }
  } 

  async update(data) {
    if(this.context.userId !== this.state.id) {
      this.setState({id:this.context.userId});            
      data = await fetchData(this.context.userId,'/activity')

      this.setState({
        sessions: data.sessions
       })
    }
  }


  async componentDidMount(){ 
    const userActivity = await fetchData(this.state.id,'/activity')

    this.setState({
     sessions: userActivity.sessions
    })
  }

  componentDidUpdate(){ 
    this.update() 
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

BarChartTest.contextType = UserContext
export default BarChartTest