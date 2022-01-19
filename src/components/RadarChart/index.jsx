import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { fetchPerfData } from "../../utils/service/Service.js"

class UserRadarChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            kind:[],
        }
      } 

      async componentDidMount(){ 
        const userPerf = await fetchPerfData()
       
        this.setState({
            data: userPerf.data,
            kind: userPerf.kind
        } )
    }

    
    /**
     * Adds a customized XAxis to the RadarChart based on datas with capitalized labels
     * Needs fetched datas in current state to work
     * @param {string} kind array element 
     * @returns labelArray with index shifted by 1
     */
    addKind = (kind) => {
        const labelArray = []
        Object.keys(this.state.kind).map(([key]) =>  labelArray.push(this.state.kind[key]))
        
        for(let i = 0 ; i < labelArray.length ; i++){
            labelArray[i] = labelArray[i].charAt(0).toUpperCase() + labelArray[i].substr(1);
        }   
        return  labelArray[kind - 1];
    }
    

    render() {   
        return(
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={730} height={250} data={this.state.data}>
                    <PolarGrid radialLines={false} />
                   
                    <PolarAngleAxis  dataKey="kind" tickFormatter={this.addKind} tick={{content:  this.customAxis, fill: '#ffff'}} /> 
                                       
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

export default UserRadarChart