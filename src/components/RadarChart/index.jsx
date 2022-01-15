import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Intensité',
        A: 40,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Vitesse',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Force',
        A: 110,
        B: 10,
        fullMark: 150,
    },
    {
        subject: 'Endurance',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Energie',
        A: 115,
        B: 105,
        fullMark: 150,
    },
    {
        subject: 'Cardio',
        A: 90,
        B: 80,
        fullMark: 150,
    },
]

class UserRadarChart extends React.Component {
    render() {
        return(
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={730} height={250} data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="subject" tick={{fill: '#ffff'}} />
                    <Radar dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

export default UserRadarChart