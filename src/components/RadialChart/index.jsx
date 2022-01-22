import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { RadialCustomLabel } from "../../utils/chartsCustomizing";
import { fetchUSerData } from "../../utils/service/Service";

class SimpleRadialChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [{score:null, fill:"#ff0000"}] }        
      } 

      async componentDidMount(){ 
        const user = await fetchUSerData()
        this.setState({  data:[{score: user.score*100, fill:"#ff0000"}] })
      }

    render(){
        return(
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={this.state.data}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false}  />
                    <RadialBar cornerRadius={10} minAngle={15} label={<RadialCustomLabel line1={this.state.data[0].score + "%"} line2="de votre objectif" />} clockWise dataKey="score" />
                </RadialBarChart>
            </ResponsiveContainer>
        )
    }
}

export default SimpleRadialChart