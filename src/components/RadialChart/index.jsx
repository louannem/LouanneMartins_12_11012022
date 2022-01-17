import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const data = [
    {
        subject:'score',
        value: 12,
        totalScore: 100,
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
    render(){
        return(
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={data}>
                    <PolarAngleAxis type="number" domain={[0, data[0].totalScore]} tick={false}  />
                    <RadialBar cornerRadius={10} minAngle={15} label={<CustomLabel value1={data[0].value + "%"} value2="de votre objectif" />} clockWise dataKey="value" />
                    
                </RadialBarChart>
            </ResponsiveContainer>
        )
    }
}

export default SimpleRadialChart