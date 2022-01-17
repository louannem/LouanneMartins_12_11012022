import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { fetchUSerData } from "../../utils/service/Service";

const test = [
    {
        subject:'score',
        value: 12,
        fill: '#ff0000'
    }
]

function CustomLabel({viewBox, value1, value2}){
    const {cx, cy} = viewBox;
    return (
        <svg>
            <circle cx="50%" cy="50%" r="80" strokeWidth="0" fill="white" />
            <text x={cx} y={cy-10} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
                <tspan alignmentBaseline="middle" fontSize="26">{value1}</tspan>
                <tspan fontSize="16" x={cx} dy="24" fill="#74798C">{value2}</tspan>
            </text>
        </svg>
    )
}


class SimpleRadialChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{score:'', fill:"#ff0000"}]
        }
      } 

      async componentDidMount(){ 
        const user = await fetchUSerData()
        console.log(user.score)
        this.setState({ 
            data:[{score: user.score*100, fill:"#ff0000"}]
        })
      }

    render(){
        return(
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={this.state.data}>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={true}  />
                    <RadialBar cornerRadius={10} minAngle={15} label={<CustomLabel value1={this.state.data[0].score + "%"} value2="de votre objectif" />} clockWise dataKey="score" />
                </RadialBarChart>
            </ResponsiveContainer>
        )
    }
}

export default SimpleRadialChart