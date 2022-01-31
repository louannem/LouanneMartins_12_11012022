import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { RadialCustomLabel } from "../../../utils/chartsCustomizing"

export default function SimpleRadialChart({data}) {


    const scoreObj = [{
        score: data.score*100,
        fill: "#ff0000"
    }]
    
    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart  startAngle={-270} endAngle={90} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={scoreObj}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false}  />
                <RadialBar cornerRadius={10} minAngle={15} label={<RadialCustomLabel line1={scoreObj[0].score + "%"}  />} clockWise dataKey="score" />
            </RadialBarChart>
        </ResponsiveContainer>
    )

}