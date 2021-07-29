
import React from 'react';
import {BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar, ResponsiveContainer, Area} from 'recharts'


const data=[
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]


const DayliesActivity = () => {
    return (
        <div className='daylies_activities'>
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width='100%' height={320}>
            <BarChart  barSize= {7} barGap={8} barCategoryGap={54} radius={5} data={data} >
            <CartesianGrid vertical='false' BackGround='#F2F2F2'/>
            <XAxis/>
            <YAxis orientation= 'right' dataKey='calories'/>
            <Tooltip />
            <Legend verticalAlign='top' margin={{ top: 36, left: 0, right: 36, bottom: 0 }}/>
            <Bar  dataKey="kilogram" fill="#E60000" radius={[5, 5, 0, 0]}/>
            <Bar dataKey="calories" fill="#282D30" radius={[5, 5, 0, 0]}/>
          
          </BarChart>
          </ResponsiveContainer>
        </div>
    );
};

export default DayliesActivity;





