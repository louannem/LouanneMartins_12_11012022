import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { UserContext } from '../../UserContext';
import { LineTooltip, addLineDays } from '../../utils/chartsCustomizing';
import { fetchSessionData, fetchData } from '../../utils/service/Service';
import "../../utils/styles/LineChart.css"

class LineChartTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:18, 
      sessions:[]
     }
  } 

  async update(data) { 
    if(this.context.userId !== this.state.id) {
      this.setState({id:this.context.userId});            
      data = await fetchData(this.context.userId, '/average-sessions')

      this.setState({ sessions: data.sessions })
    }
  }

  async componentDidMount(){ 
    const userSession = await fetchSessionData(this.state.id)
    this.setState({ sessions: userSession.sessions })
  }

  componentDidUpdate() {
    this.update()
  }

    render(){
        return(
            <ResponsiveContainer width="100%" height="100%" fill="red">
                <LineChart width="100%" height="100%" data={this.state.sessions} margin={{ top: 30, right: 10, left: 10, bottom: 0, }} >
                  <CartesianGrid strokeDasharray="3 3" fill="#FF0000"  />
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
}

LineChartTest.contextType = UserContext
export default LineChartTest