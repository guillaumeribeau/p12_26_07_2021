import React from 'react';
import {PolarRadiusAxis,PolarGrid, PolarAngleAxis, Radar, Legend, RadarChart,ResponsiveContainer} from 'recharts'
import useFetch from './FetchDating';






const RadarPerformance = () => {

const [loading, dataPerformance]= useFetch('http://localhost:3000/user/12/performance')

if (loading){
    <div>Chargement...</div>
}


console.log(dataPerformance)

    return (
        <div>
            <RadarChart outerRadius={90} width={730} height={250} data={dataPerformance&& dataPerformance.data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
   
  <Legend />
</RadarChart>
        </div>
    );
};

export default RadarPerformance