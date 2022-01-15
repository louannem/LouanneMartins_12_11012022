import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from 'recharts';

const data = [
    {
        subject:'Score',
        value: 12
    },
    {
        subject: 'scoring',
        value: 88
    }
]

const pieFill = [
    {
        id: "pie filler",
        value: 1
    }
]

const colors = [ '#FF0101', '#FBFBFB']

function CustomLabel({viewBox, value1, value2}){
    const {cx, cy} = viewBox;
    return (
     <text x={cx} y={cy-10} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
        <tspan alignmentBaseline="middle" fontSize="26">{value1}</tspan>
        <tspan fontSize="16" x={cx} dy="24" fill="#74798C">{value2}</tspan>
     </text>
    )
}

function CustomTitle() {
    return (          
          <text x={40} y={40} dy={0} fill="#20253A" fontWeight={600} fontSize={15} textAnchor="middle">Score</text>
    )
  }

class SimplePieChart extends React.Component {
    render(){
        return(
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie label={<CustomTitle/>} isAnimationActive={false} data={pieFill} dataKey="value" cx="50%" cy="50%" outerRadius={84} fill="#ffff"  />
                    <Pie startAngle={90} data={data} dataKey="value" cx="50%" cy="50%" innerRadius={85} fill="#FF0000" cornerRadius={40}>
                    <Label  position="center" 
                        content={<CustomLabel value1={data[0].value + "%"} value2="de votre objectif"/>}>
                    </Label>
                        { data.map((entry, index) => <Cell key={`cell-${index}`}  fill={colors[index % colors.length]} stroke="#FBFBFB"/>) }
                    </Pie>
                    
                    
                </PieChart>

            </ResponsiveContainer>
        )
    }
}

export default SimplePieChart