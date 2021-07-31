
import React from 'react';
import {BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar, ResponsiveContainer, Area} from 'recharts'
import useFetch from './FetchDating'


const DayliesActivity = () => {

const [loading, items]= useFetch('http://localhost:3000/user/12/activity')


if (loading){
    return <div>Chargement...</div>
}
console.log(items)

    return (
        <div className='daylies_activities'>
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width={540} height={320}>
            <BarChart  barSize= {7} barGap={8} barCategoryGap={54} radius={5} data={items.data.sessions} >
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





