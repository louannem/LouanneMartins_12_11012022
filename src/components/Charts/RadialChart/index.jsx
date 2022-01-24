import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { UserContext } from "../../../UserContext";
import { RadialCustomLabel } from "../../../utils/chartsCustomizing";
import { fetchData } from "../../../utils/service/Service";

class SimpleRadialChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 18, 
            data01:[{score: null, fill:"#ff0000"}],
            data02: [{score: null,fill: "#ff0000"}]       
      } 
    }

    /**
   * Function  to fetch new data after having switched their id
   * @return {array} data newly fetched data
   */
    async update() {
        if(this.context.userId !== this.state.id) {
            this.setState({id:this.context.userId});            
            const userData = await fetchData(this.context.userId, '')
      
            this.setState({
                data01:[{score: userData.score*100, fill:"#ff0000"}],
                data02: [{score: userData.todayScore*100,fill: "#ff0000"}]
            })
        }
    }

      async componentDidMount(){ 
        const user = await fetchData(this.state.id, '')
        this.setState({  data01:[{score: user.score*100, fill:"#ff0000"}] })
      }

      componentDidUpdate() {
          this.update()
      }

    render(){
        return( 
            this.state.id === 18 ?
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={this.state.data01}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false}  />
                    <RadialBar cornerRadius={10} minAngle={15} label={<RadialCustomLabel line1={this.state.data01[0].score + "%"} line2="de votre objectif" />} clockWise dataKey="score" />
                </RadialBarChart>
            </ResponsiveContainer>

            :

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={this.state.data02}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false}  />
                    <RadialBar cornerRadius={10} minAngle={15} label={<RadialCustomLabel line1={this.state.data02[0].score + "%"} line2="de votre objectif" />} clockWise dataKey="score" />
                </RadialBarChart>
            </ResponsiveContainer>
        )
    }
}

SimpleRadialChart.contextType = UserContext
export default SimpleRadialChart