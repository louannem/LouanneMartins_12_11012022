import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

export default function SimpleRadarCharts({data}) {
    const [perfKind, setKind] = useState()

    useEffect(() => {
        setKind(data.kind)
        
        console.log(data.kind)
    }, [data, perfKind])

    const addkind = (kind) => {
        const labelArray = []
        Object.keys(data.kind).map(([key]) =>  labelArray.push(data.kind[key]))
        
        for(let i = 0 ; i < labelArray.length ; i++){
            labelArray[i] = labelArray[i].charAt(0).toUpperCase() + labelArray[i].substr(1);
        }   
        console.log(labelArray[kind])
        return  labelArray[kind - 1]
    }
    addkind()

    return(
        data &&
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} width={730} height={250} data={data}>
                <PolarGrid radialLines={false} />
               
                <PolarAngleAxis  dataKey={addkind} tick={{ fill: '#ffff'}} /> 
                                   
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
        
    )
}