
import React from 'react';
import {BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'
import { USER_ACTIVITY } from '../data';

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
        <div>
               <BarChart width={835} height={320} radius={5} data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey='kilogram'/>
            <Tooltip />
            <Legend />
            <Bar width={7} dataKey="kilogram" fill="#E60000" />
            <Bar dataKey="calories" fill="#282D30" />
          </BarChart>
        </div>
    );
};

export default DayliesActivity;





