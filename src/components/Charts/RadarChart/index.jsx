import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import propTypes from 'prop-types'

export default function SimpleRadarCharts({data}) {    
    const addKind = (kind) => {
        const labels = [ 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
        return labels[kind - 1]
      }

      
    return(        
        <ResponsiveContainer width="70%" height="100%">
            <RadarChart outerRadius={90}  height={250} data={data}>
                <PolarGrid radialLines={false} />               
                <PolarAngleAxis  dataKey="kind" tickFormatter={addKind} tick={{ fill: '#ffff'}} /> 
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
        
    )
    
}

SimpleRadarCharts.propTypes = {
    data: propTypes.array.isRequired
}